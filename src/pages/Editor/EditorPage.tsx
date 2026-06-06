import { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as fabric from 'fabric';
import {
  Undo2, Redo2, ZoomIn, ZoomOut, Download, Save, ArrowLeft,
  Layers, Type, Image, Square, Circle, Triangle, Minus, Palette,
  AlignLeft, AlignCenter, AlignRight, Bold, Italic,
  Copy, Trash2, EyeOff, RotateCcw,
  Menu, QrCode,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import toast from 'react-hot-toast';
import { TEMPLATES } from '../../data/templates';

const CARD_SIZES = {
  standard: { width: 1050, height: 600, label: 'Standard (3.5" × 2")' },
  square: { width: 800, height: 800, label: 'Square (2.5" × 2.5")' },
  vertical: { width: 600, height: 1050, label: 'Vertical (2" × 3.5")' },
};

const FONT_FAMILIES = ['Space Grotesk', 'Inter', 'Poppins', 'Georgia', 'Arial', 'Courier New', 'Montserrat'];
const FONT_SIZES = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48, 56, 64, 72];

const COLORS_PALETTE = [
  '#000000', '#FFFFFF', '#FFD93D', '#4D96FF', '#6BCB77', '#FF6B6B', '#A855F7', '#FF8C42',
  '#1A3C5E', '#3D2B1F', '#FCE4EC', '#E8F5E9', '#F3F4F6', '#1F2937', '#C9A84C', '#2E7D32',
];

const SHAPES = [
  { id: 'rect', label: 'Rectangle', icon: Square },
  { id: 'circle', label: 'Circle', icon: Circle },
  { id: 'triangle', label: 'Triangle', icon: Triangle },
  { id: 'line', label: 'Line', icon: Minus },
];

type ToolType = 'select' | 'text' | 'image' | 'shape' | 'qr';
type Side = 'front' | 'back';
type CardSizeKey = keyof typeof CARD_SIZES;

function ToolButton({ icon: Icon, label, active, onClick }: { icon: any; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={label}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
        padding: '0.625rem 0.5rem', border: `3px solid ${active ? '#000' : 'transparent'}`,
        borderRadius: '6px', background: active ? '#FFD93D' : 'transparent',
        cursor: 'pointer', transition: 'all 0.15s', color: 'var(--text-primary)',
        boxShadow: active ? '3px 3px 0 #000' : 'none',
        transform: active ? 'translate(-1px,-1px)' : 'none', minWidth: '52px',
      }}
      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)'; }}
      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
    >
      <Icon size={18} />
      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.625rem', textAlign: 'center', lineHeight: 1 }}>{label}</span>
    </button>
  );
}

export default function EditorPage() {
  const { designId, templateId } = useParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef<number>(-1);

  const [activeTool, setActiveTool] = useState<ToolType>('select');
  const [activeSide, setActiveSide] = useState<Side>('front');
  const [zoom, setZoom] = useState(0.65);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);
  const [layers, setLayers] = useState<{ id: string; name: string; type: string }[]>([]);
  const [showLayers, setShowLayers] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [bgColor, setBgColor] = useState('#1A3C5E');
  const [cardSize, setCardSize] = useState<CardSizeKey>('standard');
  const [designName, setDesignName] = useState('My Business Card');
  const [fontFamily, setFontFamily] = useState('Space Grotesk');
  const [fontSize, setFontSize] = useState(24);
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [showShapeMenu, setShowShapeMenu] = useState(false);
  const [showQrMenu, setShowQrMenu] = useState(false);

  const updateLayers = useCallback(() => {
    if (!fabricRef.current) return;
    const objects = fabricRef.current.getObjects();
    setLayers(objects.map((obj: any, i: number) => ({
      id: obj.id || String(i),
      name: obj.type === 'textbox' ? ((obj as fabric.Textbox).text || '').slice(0, 20) : (obj.type || 'object'),
      type: obj.type || 'object',
    })).reverse());
  }, []);

  const saveHistory = useCallback(() => {
    if (!fabricRef.current) return;
    const json = JSON.stringify(fabricRef.current.toJSON());
    historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
    historyRef.current.push(json);
    historyIndexRef.current = historyRef.current.length - 1;
    setCanUndo(historyIndexRef.current > 0);
    setCanRedo(false);
    updateLayers();
  }, [updateLayers]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const size = CARD_SIZES[cardSize];

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: size.width * zoom,
      height: size.height * zoom,
      backgroundColor: bgColor,
      selection: true,
      preserveObjectStacking: true,
    });
    fabricRef.current = canvas;

    // Load template if templateId
    if (templateId) {
      const template = TEMPLATES.find(t => t.id === templateId);
      if (template) {
        const bg = template.frontDesign.background;
        if (typeof bg === 'string' && !bg.includes('gradient')) setBgColor(bg);
        setDesignName(template.name);
        template.frontDesign.objects.forEach((obj: any) => {
          if (obj.type === 'text') {
            canvas.add(new fabric.Textbox(obj.text || '', {
              left: obj.x * zoom, top: obj.y * zoom,
              fontSize: (obj.fontSize || 16) * zoom,
              fontFamily: obj.fontFamily || 'Inter',
              fontWeight: (obj.fontWeight || '400') as any,
              fill: obj.fill || '#000',
            }));
          } else if (obj.type === 'shape' && obj.shape === 'rect') {
            canvas.add(new fabric.Rect({
              left: obj.x * zoom, top: obj.y * zoom,
              width: (obj.width || 100) * zoom,
              height: (obj.height || 10) * zoom,
              fill: obj.fill || '#000',
            }));
          }
        });
        canvas.renderAll();
      }
    } else {
      // Default starter
      canvas.add(new fabric.Textbox('Your Name Here', {
        left: 60 * zoom, top: 80 * zoom, fontSize: 36 * zoom,
        fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#FFFFFF',
      }));
      canvas.add(new fabric.Textbox('Your Title · Company Name', {
        left: 60 * zoom, top: 135 * zoom, fontSize: 16 * zoom,
        fontFamily: 'Inter', fill: '#FFD93D',
      }));
      canvas.add(new fabric.Rect({
        left: 60 * zoom, top: 165 * zoom,
        width: 160 * zoom, height: 3 * zoom, fill: '#FFD93D',
      }));
      canvas.add(new fabric.Textbox('+91 98765 43210  ·  you@example.com', {
        left: 60 * zoom, top: 192 * zoom, fontSize: 13 * zoom,
        fontFamily: 'Inter', fill: '#CCDDEE',
      }));
      canvas.renderAll();
    }

    canvas.on('selection:created', (e: any) => setSelectedObject(e.selected?.[0] || null));
    canvas.on('selection:updated', (e: any) => setSelectedObject(e.selected?.[0] || null));
    canvas.on('selection:cleared', () => setSelectedObject(null));
    canvas.on('object:modified', saveHistory);
    canvas.on('object:added', saveHistory);

    // Keyboard shortcuts
    const handleKey = (e: KeyboardEvent) => {
      const isCtrl = e.ctrlKey || e.metaKey;
      if (isCtrl && e.key === 'z' && !e.shiftKey) { e.preventDefault(); handleUndo(); }
      if (isCtrl && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); handleRedo(); }
      if (isCtrl && e.key === 'd') {
        e.preventDefault();
        const obj = canvas.getActiveObject();
        if (obj) {
          obj.clone().then((cloned: fabric.Object) => {
            cloned.set({ left: (cloned.left || 0) + 20, top: (cloned.top || 0) + 20 });
            canvas.add(cloned);
            canvas.renderAll();
          });
        }
      }
      if ((e.key === 'Delete' || e.key === 'Backspace') && !isTextboxEditing(canvas)) {
        const active = canvas.getActiveObject();
        if (active) { canvas.remove(active); canvas.renderAll(); }
      }
    };
    window.addEventListener('keydown', handleKey);
    saveHistory();

    return () => {
      window.removeEventListener('keydown', handleKey);
      canvas.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSize]);

  const isTextboxEditing = (canvas: fabric.Canvas) => {
    const obj = canvas.getActiveObject();
    return obj?.type === 'textbox' && (obj as any).isEditing;
  };

  useEffect(() => {
    if (!fabricRef.current) return;
    const size = CARD_SIZES[cardSize];
    fabricRef.current.setDimensions({ width: size.width * zoom, height: size.height * zoom });
    fabricRef.current.setZoom(zoom);
    fabricRef.current.renderAll();
  }, [zoom, cardSize]);

  useEffect(() => {
    if (!fabricRef.current) return;
    fabricRef.current.set('backgroundColor', bgColor);
    fabricRef.current.renderAll();
  }, [bgColor]);

  const handleUndo = () => {
    if (historyIndexRef.current <= 0 || !fabricRef.current) return;
    historyIndexRef.current--;
    fabricRef.current.loadFromJSON(historyRef.current[historyIndexRef.current]).then(() => {
      fabricRef.current?.renderAll();
      setCanUndo(historyIndexRef.current > 0);
      setCanRedo(true);
      updateLayers();
    });
  };

  const handleRedo = () => {
    if (historyIndexRef.current >= historyRef.current.length - 1 || !fabricRef.current) return;
    historyIndexRef.current++;
    fabricRef.current.loadFromJSON(historyRef.current[historyIndexRef.current]).then(() => {
      fabricRef.current?.renderAll();
      setCanUndo(true);
      setCanRedo(historyIndexRef.current < historyRef.current.length - 1);
      updateLayers();
    });
  };

  const addText = () => {
    if (!fabricRef.current) return;
    const text = new fabric.Textbox('Double click to edit', {
      left: 100, top: 100, fontSize: fontSize * zoom,
      fontFamily, fontWeight: bold ? 'bold' : 'normal',
      fontStyle: italic ? 'italic' : 'normal',
      fill: textColor, width: 300 * zoom, editable: true,
    });
    fabricRef.current.add(text);
    fabricRef.current.setActiveObject(text);
    fabricRef.current.renderAll();
    setActiveTool('select');
    toast.success('Text added! Double-click to edit.');
  };

  const addShape = (shapeType: string) => {
    if (!fabricRef.current) return;
    const canvas = fabricRef.current;
    const opts = { fill: '#FFD93D', stroke: '#000000', strokeWidth: 3 };
    let obj: fabric.Object;
    if (shapeType === 'rect') obj = new fabric.Rect({ ...opts, left: 100, top: 100, width: 200 * zoom, height: 100 * zoom });
    else if (shapeType === 'circle') obj = new fabric.Circle({ ...opts, left: 100, top: 100, radius: 60 * zoom });
    else if (shapeType === 'triangle') obj = new fabric.Triangle({ ...opts, left: 100, top: 100, width: 150 * zoom, height: 130 * zoom });
    else obj = new fabric.Line([50, 100, 250 * zoom, 100], { stroke: '#FFD93D', strokeWidth: 4 * zoom });
    canvas.add(obj!);
    canvas.setActiveObject(obj!);
    canvas.renderAll();
    setActiveTool('select');
    setShowShapeMenu(false);
  };

  const addImage = () => {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file || !fabricRef.current) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        fabric.FabricImage.fromURL(ev.target?.result as string).then((img) => {
          img.scaleToWidth(200 * zoom);
          img.set({ left: 80, top: 80 });
          fabricRef.current!.add(img);
          fabricRef.current!.setActiveObject(img);
          fabricRef.current!.renderAll();
          toast.success('Image added!');
        });
      };
      reader.readAsDataURL(file);
    };
    input.click();
    setActiveTool('select');
  };

  const deleteSelected = () => {
    if (!fabricRef.current) return;
    const obj = fabricRef.current.getActiveObject();
    if (obj) { fabricRef.current.remove(obj); fabricRef.current.renderAll(); toast.success('Deleted'); }
  };

  const duplicateSelected = async () => {
    if (!fabricRef.current) return;
    const obj = fabricRef.current.getActiveObject();
    if (!obj) return;
    const cloned = await obj.clone();
    cloned.set({ left: (cloned.left || 0) + 20, top: (cloned.top || 0) + 20 });
    fabricRef.current.add(cloned);
    fabricRef.current.setActiveObject(cloned);
    fabricRef.current.renderAll();
    toast.success('Duplicated!');
  };

  const updateTextProp = (prop: string, value: any) => {
    if (!fabricRef.current || !selectedObject || selectedObject.type !== 'textbox') return;
    (selectedObject as fabric.Textbox).set(prop as any, value);
    fabricRef.current.renderAll();
    saveHistory();
  };

  const exportPNG = () => {
    if (!fabricRef.current) return;
    const dataURL = fabricRef.current.toDataURL({ format: 'png', quality: 1, multiplier: 300 / 72 });
    const a = document.createElement('a');
    a.href = dataURL; a.download = `${designName}.png`; a.click();
    toast.success('Exported as 300 DPI PNG!');
  };

  const exportSVG = () => {
    if (!fabricRef.current) return;
    const svg = fabricRef.current.toSVG();
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${designName}.svg`; a.click();
    URL.revokeObjectURL(url);
    toast.success('Exported as SVG!');
  };

  const isTextSelected = selectedObject?.type === 'textbox';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      {/* Top Toolbar */}
      <div style={{
        height: '60px', background: 'var(--bg-primary)',
        borderBottom: '3px solid var(--border-color)',
        display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '0.75rem', flexShrink: 0, zIndex: 30,
      }}>
        <Link to="/dashboard/designs" style={{ textDecoration: 'none' }}>
          <button className="btn btn-outline btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            <ArrowLeft size={14} /> Back
          </button>
        </Link>
        <div style={{ width: '2px', height: '32px', background: 'var(--border-color)' }} />

        <input value={designName} onChange={e => setDesignName(e.target.value)}
          style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9375rem', border: 'none', background: 'transparent', color: 'var(--text-primary)', outline: 'none', minWidth: '160px' }} />
        <div style={{ width: '2px', height: '32px', background: 'var(--border-color)' }} />

        <button onClick={handleUndo} disabled={!canUndo} className="btn btn-outline btn-icon btn-sm" title="Undo (Ctrl+Z)"><Undo2 size={16} /></button>
        <button onClick={handleRedo} disabled={!canRedo} className="btn btn-outline btn-icon btn-sm" title="Redo (Ctrl+Y)"><Redo2 size={16} /></button>
        <div style={{ width: '2px', height: '32px', background: 'var(--border-color)' }} />

        <button onClick={() => setZoom(z => Math.max(0.3, +(z - 0.1).toFixed(1)))} className="btn btn-outline btn-icon btn-sm"><ZoomOut size={16} /></button>
        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', minWidth: '48px', textAlign: 'center' }}>
          {Math.round(zoom * 100)}%
        </span>
        <button onClick={() => setZoom(z => Math.min(2, +(z + 0.1).toFixed(1)))} className="btn btn-outline btn-icon btn-sm"><ZoomIn size={16} /></button>
        <div style={{ width: '2px', height: '32px', background: 'var(--border-color)' }} />

        <div style={{ display: 'flex', gap: '0.375rem' }}>
          {(['front', 'back'] as Side[]).map(side => (
            <button key={side} onClick={() => setActiveSide(side)}
              className={`btn btn-sm ${activeSide === side ? 'btn-primary' : 'btn-outline'}`}
              style={{ textTransform: 'capitalize' }}>{side}</button>
          ))}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <select className="input" style={{ height: '36px', fontSize: '0.8125rem', width: 'auto', cursor: 'pointer' }}
            value={cardSize} onChange={e => setCardSize(e.target.value as CardSizeKey)}>
            {Object.entries(CARD_SIZES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <button onClick={() => setShowLayers(!showLayers)} className={`btn btn-sm ${showLayers ? 'btn-secondary' : 'btn-outline'}`}>
            <Layers size={14} /> Layers
          </button>
          <button onClick={exportPNG} className="btn btn-success btn-sm"><Download size={14} /> PNG</button>
          <button onClick={exportSVG} className="btn btn-outline btn-sm"><Download size={14} /> SVG</button>
          <button onClick={() => toast.success('Saved!')} className="btn btn-primary btn-sm"><Save size={14} /> Save</button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar Tools */}
        <div style={{ width: '68px', background: 'var(--bg-primary)', borderRight: '3px solid var(--border-color)', display: 'flex', flexDirection: 'column', padding: '0.5rem', gap: '4px', overflowY: 'auto', flexShrink: 0, zIndex: 20 }}>
          <ToolButton icon={Type} label="Text" active={activeTool === 'text'} onClick={() => { setActiveTool('text'); addText(); }} />
          <ToolButton icon={Image} label="Image" active={activeTool === 'image'} onClick={() => { setActiveTool('image'); addImage(); }} />
          <ToolButton icon={Square} label="Shapes" active={activeTool === 'shape'} onClick={() => { setActiveTool('shape'); setShowShapeMenu(s => !s); setShowQrMenu(false); }} />
          <ToolButton icon={QrCode} label="QR" active={activeTool === 'qr'} onClick={() => { setActiveTool('qr'); setShowQrMenu(s => !s); setShowShapeMenu(false); }} />
          <div style={{ height: '2px', background: 'var(--border-color)', margin: '0.25rem 0' }} />
          {selectedObject && (
            <>
              <ToolButton icon={Copy} label="Dupe" active={false} onClick={duplicateSelected} />
              <ToolButton icon={Trash2} label="Del" active={false} onClick={deleteSelected} />
              <ToolButton icon={RotateCcw} label="Reset" active={false} onClick={() => { (selectedObject as any).set({ angle: 0 }); fabricRef.current?.renderAll(); }} />
            </>
          )}

          {/* Shape Popover */}
          {showShapeMenu && (
            <div style={{ position: 'absolute', left: '72px', top: '120px', background: 'var(--bg-primary)', border: '3px solid #000', borderRadius: '8px', boxShadow: '6px 6px 0 #000', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 40, minWidth: '110px' }}>
              {SHAPES.map(s => (
                <button key={s.id} onClick={() => addShape(s.id)} className="btn btn-outline btn-sm" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                  <s.icon size={14} /> {s.label}
                </button>
              ))}
            </div>
          )}

          {/* QR Popover */}
          {showQrMenu && (
            <div style={{ position: 'absolute', left: '72px', top: '180px', background: 'var(--bg-primary)', border: '3px solid #000', borderRadius: '8px', boxShadow: '6px 6px 0 #000', padding: '1rem', zIndex: 40, width: '200px' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Add QR Code</div>
              <QRCodeSVG value="https://cardbuilderstudio.com" size={120} style={{ display: 'block', margin: '0 auto 0.75rem' }} />
              <button onClick={() => { toast.success('QR added!'); setShowQrMenu(false); setActiveTool('select'); }} className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Add to Card
              </button>
            </div>
          )}
        </div>

        {/* Canvas Area */}
        <div style={{ flex: 1, overflow: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '2rem', background: 'var(--bg-secondary)', position: 'relative' }}
          onClick={() => { setShowShapeMenu(false); setShowQrMenu(false); }}>
          <div className="grid-pattern" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.4 }} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            style={{ position: 'relative', boxShadow: '20px 20px 40px rgba(0,0,0,0.3)', border: '3px solid #000', borderRadius: '4px', zIndex: 1 }}
          >
            <canvas ref={canvasRef} />
          </motion.div>
        </div>

        {/* Right Properties Panel */}
        <AnimatePresence>
          {(selectedObject || showLayers) && (
            <motion.div
              initial={{ width: 0, opacity: 0 }} animate={{ width: 240, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
              style={{ background: 'var(--bg-primary)', borderLeft: '3px solid var(--border-color)', flexShrink: 0, overflowX: 'hidden' }}
            >
              <div style={{ width: '240px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', height: '100%' }}>
                {/* Background */}
                <div>
                  <label className="label" style={{ fontSize: '0.75rem' }}>Background Color</label>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)}
                      style={{ width: '44px', height: '36px', border: '3px solid #000', borderRadius: '4px', cursor: 'pointer', padding: '2px' }} />
                    <input className="input" value={bgColor} onChange={e => setBgColor(e.target.value)} style={{ fontSize: '0.8125rem' }} />
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {COLORS_PALETTE.map(c => (
                      <button key={c} onClick={() => setBgColor(c)} title={c}
                        style={{ width: '22px', height: '22px', background: c, border: bgColor === c ? '3px solid #000' : '2px solid #00000033', borderRadius: '3px', cursor: 'pointer' }} />
                    ))}
                  </div>
                </div>

                <div style={{ height: '2px', background: 'var(--border-color)' }} />

                {/* Text Properties */}
                {isTextSelected && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>✏️ Text</div>
                    <div>
                      <label className="label" style={{ fontSize: '0.7rem' }}>Font</label>
                      <select className="input" style={{ fontSize: '0.8125rem', cursor: 'pointer' }}
                        value={(selectedObject as fabric.Textbox)?.fontFamily || fontFamily}
                        onChange={e => { setFontFamily(e.target.value); updateTextProp('fontFamily', e.target.value); }}>
                        {FONT_FAMILIES.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div>
                        <label className="label" style={{ fontSize: '0.7rem' }}>Size</label>
                        <select className="input" style={{ fontSize: '0.8125rem', cursor: 'pointer' }}
                          value={Math.round(((selectedObject as fabric.Textbox)?.fontSize || fontSize * zoom) / zoom)}
                          onChange={e => { const s = Number(e.target.value); setFontSize(s); updateTextProp('fontSize', s * zoom); }}>
                          {FONT_SIZES.map(s => <option key={s} value={s}>{s}px</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="label" style={{ fontSize: '0.7rem' }}>Color</label>
                        <input type="color"
                          value={(selectedObject as fabric.Textbox)?.fill as string || textColor}
                          onChange={e => { setTextColor(e.target.value); updateTextProp('fill', e.target.value); }}
                          style={{ width: '100%', height: '38px', border: '3px solid #000', borderRadius: '4px', cursor: 'pointer', padding: '2px' }} />
                      </div>
                    </div>
                    <div>
                      <label className="label" style={{ fontSize: '0.7rem' }}>Style & Align</label>
                      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                        {[
                          { icon: Bold, prop: 'fontWeight', val: 'bold', norm: 'normal', state: bold, set: setBold },
                          { icon: Italic, prop: 'fontStyle', val: 'italic', norm: 'normal', state: italic, set: setItalic },
                        ].map(({ icon: Icon, prop, val, norm, state, set }) => (
                          <button key={prop} onClick={() => { const n = !state; set(n); updateTextProp(prop, n ? val : norm); }}
                            className={`btn btn-sm ${state ? 'btn-primary' : 'btn-outline'}`}>
                            <Icon size={14} />
                          </button>
                        ))}
                        {[AlignLeft, AlignCenter, AlignRight].map((Icon, idx) => (
                          <button key={idx} onClick={() => updateTextProp('textAlign', ['left', 'center', 'right'][idx])}
                            className="btn btn-outline btn-icon btn-sm">
                            <Icon size={14} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Object (non-text) Properties */}
                {selectedObject && !isTextSelected && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>🎨 Object</div>
                    <div>
                      <label className="label" style={{ fontSize: '0.7rem' }}>Fill</label>
                      <input type="color"
                        value={(selectedObject as any)?.fill as string || '#FFD93D'}
                        onChange={e => { (selectedObject as any).set('fill', e.target.value); fabricRef.current?.renderAll(); }}
                        style={{ width: '100%', height: '38px', border: '3px solid #000', borderRadius: '4px', cursor: 'pointer', padding: '2px' }} />
                    </div>
                    <div>
                      <label className="label" style={{ fontSize: '0.7rem' }}>Opacity: {Math.round((selectedObject.opacity || 1) * 100)}%</label>
                      <input type="range" min={0} max={1} step={0.05} value={selectedObject.opacity || 1}
                        onChange={e => { selectedObject.set({ opacity: Number(e.target.value) }); fabricRef.current?.renderAll(); }}
                        style={{ width: '100%', accentColor: '#FFD93D' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={duplicateSelected} className="btn btn-outline btn-sm" style={{ flex: 1 }}><Copy size={12} /> Dupe</button>
                      <button onClick={deleteSelected} className="btn btn-danger btn-sm" style={{ flex: 1 }}><Trash2 size={12} /> Del</button>
                    </div>
                  </div>
                )}

                {/* Layers */}
                {showLayers && (
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>📚 Layers ({layers.length})</div>
                    {layers.length === 0 && <p style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Add elements to see layers</p>}
                    {layers.map((layer, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.625rem', borderRadius: '4px', border: '2px solid var(--border-color)', marginBottom: '4px', background: 'var(--bg-secondary)', fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                        <span>{layer.type === 'textbox' ? '📝' : layer.type === 'image' ? '🖼' : '⬛'}</span>
                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{layer.name}</span>
                        <EyeOff size={11} color="var(--text-muted)" style={{ cursor: 'pointer', flexShrink: 0 }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
