/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import * as htmlToImage from 'html-to-image';
import { 
  Search, 
  Filter, 
  LayoutDashboard, 
  Table as TableIcon, 
  Download, 
  RotateCcw,
  Maximize2,
  ChevronRight,
  Star,
  User,
  Shield,
  Activity,
  LogOut,
  X,
  Trophy,
  Plus,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import { cn } from './lib/utils';
import { Player, CATEGORIES, POSITIONS } from './types';

// --- Components ---

const SplashScreen = ({ onLogin }: { onLogin: (pass: string) => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Tenerife2026') {
      onLogin(password);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-tenerife-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-tenerife-blue/10 via-transparent to-tenerife-blue/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tenerife-blue/10 blur-[120px] rounded-full animate-pulse-glow" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12 flex items-center justify-center"
      >
        {/* Spectacular Background Effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Rotating Ring */}
          <div className="absolute w-[260px] h-[260px] md:w-[450px] md:h-[450px] border border-tenerife-blue/20 rounded-full animate-spin-slow border-dashed" />
          {/* Inner Rotating Ring */}
          <div className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] border border-white/10 rounded-full animate-spin-reverse-slow border-dotted" />
          {/* Pulsing Glows */}
          <div className="absolute w-56 h-56 md:w-96 md:h-96 bg-tenerife-blue/30 blur-[80px] rounded-full animate-pulse" />
          <div className="absolute w-40 h-40 md:w-72 md:h-72 bg-white/5 blur-[40px] rounded-full animate-pulse-glow" />
          {/* Radar Sweep Effect */}
          <div className="absolute w-[260px] h-[260px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-tenerife-blue/20 to-transparent animate-spin-slow opacity-30" />
        </div>

        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/CD_Tenerife_logo.svg/1200px-CD_Tenerife_logo.svg.png" 
          alt="CD Tenerife Logo" 
          className="h-32 md:h-56 w-auto relative z-10 logo-glow object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tighter text-glow uppercase">
          CD Tenerife
        </h1>
        <div className="h-1 w-24 bg-tenerife-blue mx-auto mb-4 rounded-full shadow-[0_0_10px_rgba(0,84,166,0.8)]" />
        <p className="text-white font-black tracking-widest text-[10px] md:text-xs uppercase mb-1">DIRECCIÓN DEPORTIVA 26-27</p>
        <p className="text-tenerife-blue font-display font-black md:tracking-[0.4em] tracking-wider text-[10px] md:text-xs uppercase mb-8 text-glow px-4">
          App creada por Manel Losada
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-center max-w-md px-8 mb-10 italic text-[10px] md:text-xs leading-relaxed z-10"
      >
        "El uso de datos y modelos de Big Data es el motor que transforma la intuición en precisión para las Direcciones Deportivas modernas."
      </motion.p>

      <motion.form 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-[280px] md:max-w-xs space-y-4 z-10"
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-tenerife-blue/30 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
          <input 
            type="password" 
            placeholder="Contraseña de Acceso" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cn(
              "relative w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-tenerife-blue/50 transition-all text-center tracking-widest text-sm",
              error && "border-red-500 ring-2 ring-red-500/20"
            )}
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-tenerife-blue hover:bg-blue-600 text-white font-black py-3 md:py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,84,166,0.3)] hover:shadow-[0_0_30px_rgba(0,84,166,0.5)] uppercase tracking-widest text-sm"
        >
          Iniciar Sesión
        </button>
      </motion.form>

      <footer className="absolute bottom-8 left-0 right-0 text-gray-500 font-display font-black md:tracking-[0.3em] tracking-wider uppercase text-glow text-[8px] md:text-xs px-4 text-center">
        DIRECCIÓN DEPORTIVA 26-27 | App creada por Manel Losada
      </footer>
    </div>
  );
};

const PlayerCard = ({ player, onClick }: { player: Player; onClick: () => void; key?: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.15, y: -8, rotateZ: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {/* Dynamic Glow */}
      <div className="absolute -inset-2 bg-tenerife-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-tenerife-card border border-white/10 rounded-xl p-2 flex flex-col items-center space-y-1.5 overflow-hidden w-24 md:w-28 shadow-2xl glass">
        {/* Shine Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-tenerife-blue/30 group-hover:border-tenerife-blue transition-colors shadow-inner">
          <img 
            src={player.foto || `https://ui-avatars.com/api/?name=${player.nombre}&background=0054a6&color=fff`} 
            alt={player.nombre}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {player.nota >= 8 && (
            <div className="absolute top-0 right-0 p-1 bg-tenerife-silver rounded-full shadow-lg border border-white/20">
              <Star className="w-2.5 h-2.5 text-tenerife-blue fill-current" />
            </div>
          )}
        </div>
        
        <div className="text-center w-full z-10">
          <h3 className="text-[10px] md:text-xs font-black text-white truncate px-1 uppercase tracking-tighter leading-none mb-1">{player.nombre}</h3>
          <p className="text-[8px] md:text-[9px] text-gray-500 truncate px-1 font-bold uppercase tracking-widest">{player.equipo}</p>
        </div>

        <div className="flex items-center space-x-1 z-10">
          <div className="px-2 py-0.5 bg-tenerife-blue rounded shadow-[0_0_10px_rgba(0,84,166,0.5)]">
            <span className="text-[9px] md:text-[10px] font-black text-white">
              {player.nota}
            </span>
          </div>
          {player.sub23 === 'Sí' && (
            <span className="px-1.5 py-0.5 bg-white/10 text-[8px] md:text-[9px] font-black rounded text-tenerife-silver border border-white/5 uppercase">
              U23
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PitchPlayerCard = ({ player, onClick }: { player: Player; onClick: () => void }) => {
  const getDisplayName = (name: string) => {
    const parts = name.trim().split(' ');
    return parts.length > 1 ? parts[parts.length - 1] : name;
  };

  const isHighRated = player.nota >= 7;

  return (
    <motion.div 
      onClick={onClick}
      className={cn(
        "cursor-pointer group relative w-[54px] h-[74px] sm:w-[75px] sm:h-[95px] md:w-[85px] md:h-[110px] flex flex-col overflow-hidden transition-all duration-300",
        isHighRated && "player-glow-gold"
      )}
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div className="absolute inset-0 bg-black border border-white/10 rounded-lg overflow-hidden z-0" />
      <div className="relative z-10 flex flex-col h-full">
        {/* Rating Badge - Top Left Square */}
        <div className={cn(
          "absolute top-0 left-0 z-20 px-1 py-0.5 min-w-[20px] text-center",
          isHighRated ? "bg-[#facc15]" : "bg-gray-400"
        )}>
          <span className="text-[8px] md:text-[10px] font-black text-black flex items-center justify-center">
            {player.nota.toFixed(1).replace('.', ',')}
            {isHighRated && <Star className="w-2 h-2 ml-0.5 fill-current" />}
          </span>
        </div>

        {/* Photo Section - Top 60% */}
        <div className="relative h-[60%] w-full overflow-hidden bg-[#1a1a1a]">
          <img 
            src={player.foto || `https://ui-avatars.com/api/?name=${player.nombre}&background=0054a6&color=fff`} 
            alt={player.nombre}
            className={cn(
              "w-full h-full object-cover relative z-10",
              isHighRated && "border-b border-gold/50"
            )}
            referrerPolicy="no-referrer"
          />
          {isHighRated && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent pointer-events-none z-20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-500/20 blur-2xl rounded-full z-0" />
            </>
          )}
          {player.sub23 === 'Sí' && (
            <div className="absolute bottom-1 right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border border-black shadow-lg z-20" title="Sub-23" />
          )}
        </div>

        {/* Info Section - Bottom 45% */}
        <div className="flex-1 bg-black flex flex-col justify-between leading-none">
          <div className="flex-1 flex flex-col items-center justify-center px-0.5 overflow-hidden">
            <h3 className={cn(
              "text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase truncate w-full text-center",
              isHighRated ? "text-gold" : "text-white"
            )}>
              {getDisplayName(player.nombre)}
            </h3>
            <p className="text-[5px] sm:text-[6px] md:text-[7px] text-gray-500 font-bold uppercase truncate w-full text-center mt-0.5">
              {player.equipo}
            </p>
          </div>
          {/* Position Section - Tenerife Blue or Gold */}
          <div className={cn(
            "py-0.5 text-center border-t border-white/5",
            isHighRated ? "bg-gold/80" : "bg-tenerife-blue"
          )}>
            <span className={cn(
              "text-[6px] sm:text-[7px] md:text-[8px] font-black uppercase tracking-tighter",
              isHighRated ? "text-black" : "text-white"
            )}>
              {player.posicion}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TacticalPitch = ({ 
  players, 
  onPlayerClick, 
  onPositionClick,
  selectedPosition 
}: { 
  players: Player[]; 
  onPlayerClick: (p: Player) => void;
  onPositionClick: (pos: string) => void;
  selectedPosition: string | null;
}) => {
  const coords: Record<string, { x: number, y: number }> = {
    'Portero': { x: 50, y: 92 },
    'Central': { x: 50, y: 76 },
    'Lateral Derecho': { x: 85, y: 76 },
    'Lateral Izquierdo': { x: 15, y: 76 },
    'Pivote Defensivo': { x: 50, y: 60 },
    'Mediocentro': { x: 50, y: 44 },
    'Medio Derecho': { x: 82, y: 44 },
    'Medio Izquierdo': { x: 18, y: 44 },
    'Mediapunta': { x: 50, y: 28 },
    'Extremo Derecho': { x: 85, y: 12 },
    'Extremo Izquierdo': { x: 15, y: 12 },
    'Delantero': { x: 50, y: 12 }
  };

  const grouped = useMemo(() => {
    const map: Record<string, Player[]> = {};
    players.forEach(p => {
      const pos = p.posicion;
      if (!map[pos]) map[pos] = [];
      map[pos].push(p);
    });
    // Sort each position by rating descending to get the best one first
    Object.keys(map).forEach(pos => {
      map[pos].sort((a, b) => b.nota - a.nota);
    });
    return map;
  }, [players]);

  return (
    <div 
      id="tactical-pitch" 
      className="relative w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[105/130] lg:min-h-[800px] rounded-xl border-4 border-white/10 overflow-hidden shadow-2xl p-2 sm:p-4 md:p-8 bg-[#0a1a0a] mx-auto"
    >
      {/* Clean Pitch Background */}
      <div className="absolute inset-0 bg-[#0d260d]" />
      <div className="absolute inset-0 pitch-grid opacity-10 pointer-events-none" />
      
      {/* LED Glow Effect Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-tenerife-blue/5 via-transparent to-tenerife-blue/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,84,166,0.1)_0%,transparent_70%)]" />

      {/* Field Markings - LED Style */}
      <div className="absolute inset-4 border border-white/20 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
      <div className="absolute inset-x-4 top-1/2 h-[1px] bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-tenerife-blue rounded-full shadow-[0_0_15px_rgba(0,84,166,0.8)] animate-pulse" />
      
      {/* Penalty Areas with LED glow */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3/5 h-[18%] border border-white/20 border-t-0 shadow-[inset_0_-10px_20px_rgba(255,255,255,0.02)]" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/4 h-[7%] border border-white/20 border-t-0 shadow-[inset_0_-5px_10px_rgba(255,255,255,0.02)]" />
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-[18%] border border-white/20 border-b-0 shadow-[inset_0_10px_20px_rgba(255,255,255,0.02)]" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-[7%] border border-white/20 border-b-0 shadow-[inset_0_5px_10px_rgba(255,255,255,0.02)]" />
      
      {/* Corner Arcs */}
      <div className="absolute top-4 left-4 w-8 h-8 border border-white/20 border-t-0 border-l-0 rounded-br-full" />
      <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 border-t-0 border-r-0 rounded-bl-full" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 border-b-0 border-l-0 rounded-tr-full" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border border-white/20 border-b-0 border-r-0 rounded-tl-full" />

      {/* Animated LED Lines */}
      <div className="absolute inset-x-4 top-[25%] h-[1px] bg-white/5 animate-led-pulse" />
      <div className="absolute inset-x-4 top-[75%] h-[1px] bg-white/5 animate-led-pulse" />

      {/* Position Click Areas (Invisible but clickable) */}
      {POSITIONS.map(pos => {
        const coord = coords[pos];
        if (!coord) return null;
        return (
          <div 
            key={`click-${pos}`}
            onClick={() => onPositionClick(pos)}
            className={cn(
              "absolute w-24 h-32 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-0 rounded-xl transition-colors",
              selectedPosition === pos ? "bg-white/5 border border-white/10" : "hover:bg-white/5"
            )}
            style={{ left: `${coord.x}%`, top: `${coord.y}%` }}
          />
        );
      })}

      {/* Players & Placeholders */}
      {POSITIONS.map(pos => {
        const coord = coords[pos];
        const posPlayers = grouped[pos] || [];
        if (!coord) return null;

        return (
          <div 
            key={pos}
            className="absolute z-10"
            style={{ left: `${coord.x}%`, top: `${coord.y}%` }}
          >
            {posPlayers.length > 0 ? (
              <PitchPlayerCard 
                player={posPlayers[0]} 
                onClick={() => {
                  onPlayerClick(posPlayers[0]);
                  onPositionClick(pos);
                }} 
              />
            ) : (
              <div 
                onClick={() => onPositionClick(pos)}
                className={cn(
                  "w-[48px] h-[64px] sm:w-[65px] sm:h-[82px] md:w-[85px] md:h-[110px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-all cursor-pointer group/placeholder",
                  selectedPosition === pos 
                    ? "border-tenerife-blue bg-tenerife-blue/10 shadow-[0_0_15px_rgba(0,84,166,0.2)]" 
                    : "border-white/10 hover:border-white/30 bg-black/20"
                )}
              >
                <div className="text-[5px] sm:text-[7px] md:text-[9px] font-black text-gray-500 uppercase text-center px-1 group-hover/placeholder:text-white transition-colors">
                  {pos}
                </div>
                <div className="mt-1 sm:mt-2 w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full border border-white/10 flex items-center justify-center">
                  <Plus className="w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 text-gray-600 group-hover/placeholder:text-white" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const generatePlayerReport = (player: Player) => {
  if (!player || !player.nombre || player.rendimiento === 'Sin datos') {
    return "Perfil bajo seguimiento. Recopilando métricas adicionales para el informe.";
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - player.ano;

  const sub23Text = player.sub23 === 'Sí' 
    ? "Es un activo de gran valor por su condición de Sub-23, lo que le otorga una alta proyección de mercado. " 
    : "";
  
  let titularidadText = "";
  const pt = player.porc_titular;

  if (player.titular_indiscutible === 'Sí' || pt >= 85) {
    titularidadText = "Es un titular indiscutible y pilar fundamental en el once inicial.";
  } else if (pt >= 70) {
    titularidadText = "Es un jugador con una participación muy alta, siendo habitual en las alineaciones titulares.";
  } else if (pt >= 50) {
    titularidadText = "Alterna titularidades con suplencias, siendo un recurso importante en la rotación del equipo.";
  } else if (pt >= 25) {
    titularidadText = "Su rol actual es principalmente de rotación, aportando minutos desde el banquillo o en contextos específicos.";
  } else {
    titularidadText = "Actualmente tiene una participación limitada en el equipo, buscando ganar mayor protagonismo en la plantilla.";
  }

  return `${player.nombre} es un ${player.posicion} del ${player.ano} (${age} años) que actualmente milita en el ${player.equipo}. Destaca como un perfil de alto impacto en la categoría con un rendimiento de ${player.rendimiento.toLowerCase()}. Su pierna hábil es la ${player.pie_habil} y se adapta con naturalidad a sistemas basados en ${player.sistema_juego}. ${sub23Text}Su vinculación contractual con el club finaliza el ${player.contrato_hasta}. ${titularidadText}`.trim();
};

const PlayerModal = ({ player, onClose, topInPosition }: { player: Player; onClose: () => void; topInPosition: Player[] }) => {
  if (!player) return null;

  const isTop10 = topInPosition.some(p => p.nombre === player.nombre && p.equipo === player.equipo);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-tenerife-card border border-white/10 rounded-3xl w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative"
      >
        {/* Mobile Close Button */}
        <button 
          onClick={onClose} 
          className="md:hidden absolute top-4 right-4 z-[70] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/10 backdrop-blur-md"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="md:w-2/5 p-6 md:p-10 lg:p-14 bg-gradient-to-br from-tenerife-blue/20 via-transparent to-transparent border-b md:border-b-0 md:border-r border-white/5 flex flex-col items-center text-center relative overflow-hidden shrink-0">
          <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
          <div className="relative group mb-4 md:mb-8">
            <div className="absolute -inset-4 bg-tenerife-blue/30 blur-3xl rounded-full opacity-50 animate-pulse" />
            <img 
              src={player.foto || `https://ui-avatars.com/api/?name=${player.nombre}&background=0054a6&color=fff`} 
              alt={player.nombre}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-64 md:h-64 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] object-cover mx-auto border-4 border-white/10 shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-4 md:-right-4 bg-tenerife-blue text-white px-3 sm:px-4 md:px-6 py-0.5 sm:py-1 md:py-2 rounded-lg sm:rounded-xl md:rounded-2xl font-black text-lg sm:text-xl md:text-2xl shadow-[0_0_20px_rgba(0,84,166,0.5)] z-20 border border-white/20">
              {player.nota}
            </div>
          </div>
          
          <div className="space-y-2 md:space-y-4 w-full relative z-10">
            <h2 className="text-lg sm:text-xl md:text-3xl font-black text-white tracking-tighter uppercase text-glow leading-tight">{player.nombre}</h2>
            <div className="flex flex-col items-center space-y-1 md:space-y-2">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-tenerife-blue rounded-full text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-widest uppercase shadow-[0_0_15px_rgba(0,84,166,0.5)]">
                {player.posicion}
              </span>
              <span className="text-tenerife-silver font-bold tracking-widest uppercase text-[8px] sm:text-[9px] md:text-[10px]">{player.equipo}</span>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-2 gap-1.5 sm:gap-2 pt-3 sm:pt-4 md:pt-6 w-full">
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Categoría</p>
                <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-tenerife-blue uppercase truncate">{player.categoria}</p>
              </div>
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Año</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-white">{player.ano}</p>
              </div>
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Pie</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-white">{player.pie_habil}</p>
              </div>
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Contrato</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-white">{player.contrato_hasta}</p>
              </div>
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Sub-23</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-white">{player.sub23}</p>
              </div>
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Minutos</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-white">{player.minutos}</p>
              </div>
              <div className="bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/5 col-span-3 md:col-span-2">
                <p className="text-[6px] sm:text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest mb-0.5">% Titularidad</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-white">{player.porc_titular}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 p-5 sm:p-6 md:p-10 lg:p-14 space-y-6 sm:space-y-8 md:space-y-10 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[90vh] relative">
          <div className="absolute inset-0 grid-overlay opacity-5 pointer-events-none" />
          <div className="hidden md:flex justify-end items-center relative z-10">
            <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 group backdrop-blur-md">
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
            </button>
          </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-3 relative z-10">
              <div className="flex items-center space-x-2 text-tenerife-blue">
                <Activity className="w-4 h-4" />
                <h4 className="text-[10px] font-black uppercase tracking-widest">RENDIMIENTO Y ANÁLISIS</h4>
              </div>
              <p className="text-lg font-black text-white uppercase tracking-tight">
                {player.rendimiento}
              </p>
            </div>

            {isTop10 && (
              <div className="bg-white/5 border border-gold/20 p-4 rounded-2xl space-y-3 relative z-10">
                <div className="flex items-center space-x-2 text-gold">
                  <FileText className="w-4 h-4" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest">INFORME DE SCOUTING</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  {generatePlayerReport(player)}
                </p>
              </div>
            )}

          <section className="space-y-6 relative z-10">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em] flex items-center">
              <div className="w-8 h-0.5 bg-tenerife-blue mr-3" />
              Comparativa Posicional (Top 10)
            </h3>
            <div className="space-y-3">
              {topInPosition.map((p, idx) => (
                <div 
                  key={`${p.nombre}-${p.equipo}-${p.categoria}-${idx}`} 
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl border transition-all",
                    p.nombre === player.nombre 
                      ? "bg-tenerife-blue/20 border-tenerife-blue/50 shadow-[0_0_20px_rgba(0,84,166,0.1)]" 
                      : "bg-white/5 border-white/5 hover:bg-white/10"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-black text-gray-600 w-4">#{idx + 1}</span>
                    <img src={p.foto || `https://ui-avatars.com/api/?name=${p.nombre}`} className="w-10 h-10 rounded-xl object-cover border border-white/10" referrerPolicy="no-referrer" />
                    <div>
                      <p className="text-sm font-black text-white uppercase tracking-tighter">{p.nombre}</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{p.equipo}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-tenerife-blue">{p.nota}</p>
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{p.rendimiento}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'pitch' | 'table'>('pitch');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof CATEGORIES>('1ª RFEF');
  const [allPlayers, setAllPlayers] = useState<Player[]>([]);
  const [quickViewPlayer, setQuickViewPlayer] = useState<Player | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const handlePlayerClick = (p: Player) => {
    setQuickViewPlayer(p);
    setSelectedPosition(p.posicion);
  };

  const initialFilters = {
    search: '',
    minAge: 1985,
    maxAge: 2012,
    minMinutes: 0,
    maxMinutes: 3500,
    minTitular: 0,
    maxTitular: 100,
    sub23: 'Todos',
    rendimiento: 'Todos',
    contrato: 'Todos',
    comunidadAutonoma: 'Todos',
    posicion: 'Todos',
    grupo: 'Todos',
    pieHabil: 'Todos',
    sistemaJuego: 'Todos',
    equipo: 'Todos'
  };

  const [filters, setFilters] = useState(initialFilters);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  useEffect(() => {
    setSelectedPosition(null);
    setQuickViewPlayer(null);
    // Reset position filter when switching to pitch to avoid conflicts with pitch selection
    if (activeTab === 'pitch') {
      setFilters(prev => ({ ...prev, posicion: 'Todos' }));
    }
  }, [selectedCategory, activeTab]);

  useEffect(() => {
    const savedAuth = localStorage.getItem('scouting_auth');
    if (savedAuth === 'Tenerife2026') {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      loadAllData();
    }
  }, [isLoggedIn]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const categoriesToLoad = Object.entries(CATEGORIES);
      const allResults: Player[] = [];

      await Promise.all(categoriesToLoad.map(async ([catName, url]) => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const csvText = await response.text();
          
          return new Promise<void>((resolve) => {
            Papa.parse(csvText, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true,
              complete: (results) => {
                const normalized = (results.data as any[]).map(p => {
                  // Normalize keys to lowercase and handle common variations
                  const normalizedPlayer: any = { categoria: catName };
                  Object.keys(p).forEach(key => {
                    const normalizedKey = key.toLowerCase()
                      .trim()
                      .replace(/%/g, 'porc')
                      .replace(/ /g, '_')
                      .replace(/[áàäâ]/g, 'a')
                      .replace(/[éèëê]/g, 'e')
                      .replace(/[íìïî]/g, 'i')
                      .replace(/[óòöô]/g, 'o')
                      .replace(/[úùüû]/g, 'u')
                      .replace(/ñ/g, 'n')
                      .replace(/[^a-z0-9_]/g, '');
                    normalizedPlayer[normalizedKey] = p[key];
                  });
                  
                  const parseNum = (val: any): number => {
                    if (typeof val === 'number') return val;
                    if (typeof val === 'string') {
                      const cleaned = val.replace(',', '.').replace(/[^0-9.-]/g, '');
                      return parseFloat(cleaned) || 0;
                    }
                    return 0;
                  };

                  const normalizePosition = (pos: string): string => {
                    if (!pos) return 'Sin posición';
                    const p = pos.toLowerCase().trim();
                    if (p.includes('portero') || p.includes('por') || p.includes('gk')) return 'Portero';
                    if (p.includes('central') || p.includes('dfc') || p.includes('defensa central')) return 'Central';
                    if (p.includes('lateral derecho') || p.includes('ld') || p.includes('rb') || p.includes('carrilero derecho')) return 'Lateral Derecho';
                    if (p.includes('lateral izquierdo') || p.includes('li') || p.includes('lb') || p.includes('carrilero izquierdo')) return 'Lateral Izquierdo';
                    if (p.includes('pivote') || p.includes('mcd') || p.includes('dm')) return 'Pivote Defensivo';
                    if (p.includes('mediapunta') || p.includes('mp') || p.includes('cam') || p.includes('mco') || p.includes('ofensivo') || p.includes('enganche') || p.includes('enlace')) return 'Mediapunta';
                    if (p.includes('mediocentro') || p.includes('mc') || p.includes('cm') || p.includes('volante')) return 'Mediocentro';
                    if (p.includes('medio derecho') || p.includes('md') || p.includes('rm') || p.includes('interior derecho')) return 'Medio Derecho';
                    if (p.includes('medio izquierdo') || p.includes('mi') || p.includes('lm') || p.includes('interior izquierdo')) return 'Medio Izquierdo';
                    if (p.includes('extremo derecho') || p.includes('ed') || p.includes('rw')) return 'Extremo Derecho';
                    if (p.includes('extremo izquierdo') || p.includes('ei') || p.includes('lw')) return 'Extremo Izquierdo';
                    if (p.includes('extremo')) return 'Extremo Derecho'; // Fallback for generic Extremo
                    if (p.includes('delantero') || p.includes('dc') || p.includes('st') || p.includes('punta') || p.includes('segundo delantero')) return 'Delantero';
                    return 'Sin posición';
                  };

                  // Ensure critical fields exist with fallbacks
                  const finalPlayer = {
                    ...normalizedPlayer,
                    nombre: normalizedPlayer.nombre || normalizedPlayer.player || normalizedPlayer.jugador || normalizedPlayer.name || 'Sin nombre',
                    foto: normalizedPlayer.foto || normalizedPlayer.image || normalizedPlayer.photo || normalizedPlayer.foto_jugador || '',
                    equipo: normalizedPlayer.equipo || normalizedPlayer.team || normalizedPlayer.club || 'Sin equipo',
                    posicion: normalizePosition(normalizedPlayer.posicion || normalizedPlayer.posicion_principal || normalizedPlayer.demarcacion || normalizedPlayer.puesto || normalizedPlayer.position || normalizedPlayer.pos || ''),
                    nota: parseNum(normalizedPlayer.nota || normalizedPlayer.rating || normalizedPlayer.puntuacion || normalizedPlayer.score || normalizedPlayer.val || 0),
                    ano: parseNum(normalizedPlayer.ano || normalizedPlayer.year || normalizedPlayer.nacimiento || 2000),
                    minutos: parseNum(normalizedPlayer.minutos_disputados || normalizedPlayer.minutos || normalizedPlayer.mins || normalizedPlayer.min || 0),
                    porc_titular: parseNum(normalizedPlayer.porc_titular || normalizedPlayer.titularidad || normalizedPlayer.titular || normalizedPlayer._titular || normalizedPlayer.porc_tit || 0),
                    rendimiento: normalizedPlayer.rendimiento || normalizedPlayer.performance || 'Medio',
                    pie_habil: normalizedPlayer.pie_habil || normalizedPlayer.pie || 'Derecho',
                    sub23: normalizedPlayer.sub23 || (parseNum(normalizedPlayer.ano || 2000) >= 2003 ? 'Sí' : 'No'),
                    contrato_hasta: normalizedPlayer.contrato_hasta || normalizedPlayer.contrato || 'Sin contrato',
                    comunidad_autonoma: normalizedPlayer.comunidad_autonoma || normalizedPlayer.comunidad || 'Desconocida',
                    grupo: String(normalizedPlayer.grupo || normalizedPlayer.group || normalizedPlayer.grup || normalizedPlayer.pool || 'Sin grupo').trim(),
                    sistema_juego: normalizedPlayer.sistema_juego || normalizedPlayer.sistema_de_juego || normalizedPlayer.sist_de_juego || normalizedPlayer.sistema || 'Sin sistema',
                    titular_indiscutible: normalizedPlayer.titular_indiscutible || (parseNum(normalizedPlayer.porc_titular || 0) >= 80 ? 'Sí' : 'No'),
                    distancia_tenerife: parseNum(normalizedPlayer.distancia_tenerife || normalizedPlayer.distancia || normalizedPlayer.distancia_reus || normalizedPlayer.distancia_tarragona || 0)
                  };

                  return finalPlayer;
                });
                allResults.push(...normalized);
                resolve();
              },
              error: (err) => {
                console.error(`Error parsing CSV for ${catName}:`, err);
                resolve();
              }
            });
          });
        } catch (err) {
          console.error(`Error fetching data for ${catName}:`, err);
        }
      }));

      setAllPlayers(allResults);
      console.log(`Loaded ${allResults.length} players across all categories.`);
      setLoading(false);
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  const filterOptions = useMemo(() => {
    const categoryPlayers = allPlayers.filter(p => p.categoria === selectedCategory);
    return {
      contrato: ['Todos', ...new Set(categoryPlayers.map(p => String(p.contrato_hasta)).filter(Boolean))].sort(),
      rendimiento: ['Todos', ...new Set(categoryPlayers.map(p => p.rendimiento).filter(Boolean))].sort(),
      comunidad: ['Todos', ...new Set(categoryPlayers.map(p => p.comunidad_autonoma).filter(Boolean))].sort(),
      grupo: ['Todos', ...new Set(categoryPlayers.map(p => p.grupo).filter(Boolean))].sort(),
      pieHabil: ['Todos', ...new Set(categoryPlayers.map(p => p.pie_habil).filter(Boolean))].sort(),
      sistemaJuego: ['Todos', ...new Set(categoryPlayers.map(p => p.sistema_juego).filter(Boolean))].sort(),
      equipo: ['Todos', ...new Set(categoryPlayers.map(p => p.equipo).filter(Boolean))].sort(),
    };
  }, [allPlayers, selectedCategory]);

  const filteredPlayers = useMemo(() => {
    return allPlayers.filter(p => {
      const matchesCategory = p.categoria === selectedCategory;
      const searchLower = filters.search.toLowerCase().trim().replace(/[. ]/g, '');
      const playerName = p.nombre?.toLowerCase().replace(/[. ]/g, '') || '';
      const teamName = p.equipo?.toLowerCase().replace(/[. ]/g, '') || '';
      
      const matchesSearch = playerName.includes(searchLower) || teamName.includes(searchLower);
      const matchesAge = p.ano >= filters.minAge && p.ano <= filters.maxAge;
      const matchesMinutes = p.minutos >= filters.minMinutes && p.minutos <= filters.maxMinutes;
      const matchesTitular = p.porc_titular >= filters.minTitular && p.porc_titular <= filters.maxTitular;
      const matchesSub23 = filters.sub23 === 'Todos' || p.sub23 === filters.sub23;
      const matchesRendimiento = filters.rendimiento === 'Todos' || p.rendimiento === filters.rendimiento;
      const matchesContrato = filters.contrato === 'Todos' || String(p.contrato_hasta) === filters.contrato;
      const matchesComunidad = filters.comunidadAutonoma === 'Todos' || p.comunidad_autonoma === filters.comunidadAutonoma;
      const matchesPosicion = filters.posicion === 'Todos' || p.posicion === filters.posicion;
      const matchesGrupo = filters.grupo === 'Todos' || String(p.grupo) === String(filters.grupo);
      const matchesPieHabil = filters.pieHabil === 'Todos' || p.pie_habil === filters.pieHabil;
      const matchesSistemaJuego = filters.sistemaJuego === 'Todos' || p.sistema_juego === filters.sistemaJuego;
      const matchesEquipo = filters.equipo === 'Todos' || p.equipo === filters.equipo;

      return matchesCategory && matchesSearch && matchesAge && matchesMinutes && 
             matchesTitular && matchesSub23 && matchesRendimiento && 
             matchesContrato && matchesComunidad && matchesPosicion &&
             matchesGrupo && matchesPieHabil && matchesSistemaJuego && matchesEquipo;
    }).sort((a, b) => b.nota - a.nota);
  }, [allPlayers, filters, selectedCategory]);

  const topInPosition = useMemo(() => {
    const pos = selectedPosition || (quickViewPlayer?.posicion);
    if (!pos) return [];
    
    // We use filteredPlayers as the base so it respects all active filters (Team, Group, etc.)
    // We filter by position to show only players in the selected demarcación
    return filteredPlayers
      .filter(p => p.posicion === pos)
      .sort((a, b) => b.nota - a.nota)
      .slice(0, 10);
  }, [selectedPosition, quickViewPlayer, filteredPlayers]);


  if (loading && !isLoggedIn) return <div className="h-screen bg-tenerife-dark flex items-center justify-center"><div className="w-12 h-12 border-4 border-tenerife-blue border-t-transparent rounded-full animate-spin" /></div>;

  if (!isLoggedIn) {
    return <SplashScreen onLogin={(pass) => {
      localStorage.setItem('scouting_auth', pass);
      setIsLoggedIn(true);
    }} />;
  }

  return (
    <div className="min-h-screen bg-tenerife-dark flex flex-col relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-tenerife-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-tenerife-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <header className="h-16 md:h-20 border-b border-white/10 bg-tenerife-dark/40 backdrop-blur-xl sticky top-0 z-40 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/CD_Tenerife_logo.svg/1200px-CD_Tenerife_logo.svg.png" 
            alt="Logo" 
            className="h-10 md:h-12 w-auto object-contain logo-glow"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-black tracking-tighter text-glow">DIRECCIÓN DEPORTIVA 26-27</h1>
            <p className="text-[10px] text-tenerife-blue font-display font-black tracking-[0.4em] uppercase text-glow">App creada por Manel Losada</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-6">
          <div className="flex items-center bg-white/5 rounded-2xl p-1 border border-white/10">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={cn(
                "p-1.5 md:p-2 rounded-xl transition-all group relative",
                sidebarOpen 
                  ? "bg-tenerife-blue text-white shadow-lg" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
              title={sidebarOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
            >
              <Filter className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <div className="w-px h-4 bg-white/10 mx-1" />
            <button 
              onClick={resetFilters}
              className="p-1.5 md:p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group relative"
              title="Reestablecer todos los filtros"
            >
              <RotateCcw className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-[-45deg] transition-transform" />
            </button>
          </div>

          <nav className="flex items-center bg-white/5 rounded-2xl p-1">
            <button 
              onClick={() => setActiveTab('pitch')}
              className={cn(
                "flex items-center px-2 md:px-4 py-1 md:py-2 rounded-xl text-[9px] md:text-sm font-semibold transition-all",
                activeTab === 'pitch' ? "bg-tenerife-blue text-white shadow-lg" : "text-gray-400 hover:text-white"
              )}
            >
              <LayoutDashboard className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden xs:inline">Campograma</span>
              <span className="xs:hidden">Campo</span>
            </button>
            <button 
              onClick={() => setActiveTab('table')}
              className={cn(
                "flex items-center px-2 md:px-4 py-1 md:py-2 rounded-xl text-[9px] md:text-sm font-semibold transition-all",
                activeTab === 'table' ? "bg-tenerife-blue text-white shadow-lg" : "text-gray-400 hover:text-white"
              )}
            >
              <TableIcon className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden xs:inline">Tabla Maestra</span>
              <span className="xs:hidden">Tabla</span>
            </button>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-3">
            <button 
              onClick={() => {
                localStorage.removeItem('scouting_auth');
                setIsLoggedIn(false);
              }}
              className="p-2 md:p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-all border border-red-500/20"
              title="Cerrar Sesión"
            >
              <LogOut className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <>
              {/* Mobile Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              />
              <motion.aside 
                initial={{ x: -320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -320, opacity: 0 }}
                className="glass border-r border-white/10 overflow-y-auto fixed lg:relative inset-y-0 left-0 z-50 lg:z-0 w-[320px]"
              >
              <div className="p-6 space-y-8">
                <div className="flex items-center justify-between lg:hidden mb-4">
                  <h2 className="text-lg font-bold text-white">Filtros</h2>
                  <button onClick={() => setSidebarOpen(false)} className="p-2 bg-white/5 rounded-lg">
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold flex items-center text-white">
                    <Filter className="w-5 h-5 mr-2 text-tenerife-blue" />
                    Filtros Avanzados
                  </h2>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Categoría</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>).map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "py-2 rounded-lg text-[10px] font-black border transition-all uppercase tracking-widest",
                          selectedCategory === cat 
                            ? "bg-tenerife-blue border-tenerife-blue text-white shadow-[0_0_15px_rgba(0,84,166,0.3)]" 
                            : "bg-white/5 border-white/10 text-gray-500 hover:border-white/30"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Buscar jugador..." 
                    value={filters.search}
                    onChange={(e) => setFilters({...filters, search: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue"
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400 uppercase">Año</span>
                      <span className="text-tenerife-blue">{filters.minAge} - {filters.maxAge}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="range" min="1980" max="2012" value={filters.minAge} onChange={(e) => setFilters({...filters, minAge: parseInt(e.target.value)})} className="w-full accent-tenerife-blue" />
                      <input type="range" min="1980" max="2012" value={filters.maxAge} onChange={(e) => setFilters({...filters, maxAge: parseInt(e.target.value)})} className="w-full accent-tenerife-blue" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400 uppercase">Minutos</span>
                      <span className="text-tenerife-blue">{filters.minMinutes} - {filters.maxMinutes}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="range" min="0" max="3500" step="100" value={filters.minMinutes} onChange={(e) => setFilters({...filters, minMinutes: parseInt(e.target.value)})} className="w-full accent-tenerife-blue" />
                      <input type="range" min="0" max="3500" step="100" value={filters.maxMinutes} onChange={(e) => setFilters({...filters, maxMinutes: parseInt(e.target.value)})} className="w-full accent-tenerife-blue" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400 uppercase">% Titularidad</span>
                      <span className="text-tenerife-blue">{filters.minTitular}% - {filters.maxTitular}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="range" min="0" max="100" step="5" value={filters.minTitular} onChange={(e) => setFilters({...filters, minTitular: parseInt(e.target.value)})} className="w-full accent-tenerife-blue" />
                      <input type="range" min="0" max="100" step="5" value={filters.maxTitular} onChange={(e) => setFilters({...filters, maxTitular: parseInt(e.target.value)})} className="w-full accent-tenerife-blue" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {(selectedCategory !== '1ª RFEF' && selectedCategory !== '2ª RFEF') && (
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Equipo</label>
                        <select 
                          value={filters.equipo}
                          onChange={(e) => setFilters({...filters, equipo: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue appearance-none"
                        >
                          {filterOptions.equipo.map(opt => <option key={opt} value={opt} className="bg-tenerife-dark">{opt}</option>)}
                        </select>
                      </div>

                      {!(selectedCategory === '3ª RFEF' && activeTab === 'pitch') && (
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Posición</label>
                          <select 
                            value={filters.posicion}
                            onChange={(e) => setFilters({...filters, posicion: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue appearance-none"
                          >
                            {['Todos', ...POSITIONS].map(opt => <option key={opt} value={opt} className="bg-tenerife-dark">{opt}</option>)}
                          </select>
                        </div>
                      )}
                      
                      {selectedCategory === '3ª RFEF' && (
                        <>
                          {activeTab === 'table' && (
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pie Hábil</label>
                              <select 
                                value={filters.pieHabil}
                                onChange={(e) => setFilters({...filters, pieHabil: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue appearance-none"
                              >
                                {filterOptions.pieHabil.map(opt => <option key={opt} value={opt} className="bg-tenerife-dark">{opt}</option>)}
                              </select>
                            </div>
                          )}
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sub 23</label>
                            <select 
                              value={filters.sub23}
                              onChange={(e) => setFilters({...filters, sub23: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue appearance-none"
                            >
                              {['Todos', 'Sí', 'No'].map(opt => <option key={opt} value={opt} className="bg-tenerife-dark">{opt}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rendimiento</label>
                            <select 
                              value={filters.rendimiento}
                              onChange={(e) => setFilters({...filters, rendimiento: e.target.value})}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue appearance-none"
                            >
                              {filterOptions.rendimiento.map(opt => <option key={opt} value={opt} className="bg-tenerife-dark">{opt}</option>)}
                            </select>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {(selectedCategory === '1ª RFEF' || selectedCategory === '2ª RFEF') && [
                    { label: 'Equipo', key: 'equipo', options: filterOptions.equipo },
                    { label: 'Grupo', key: 'grupo', options: filterOptions.grupo },
                    { label: 'Posición', key: 'posicion', options: ['Todos', ...POSITIONS] },
                    { label: 'Pie Hábil', key: 'pieHabil', options: filterOptions.pieHabil },
                    { label: 'Sub 23', key: 'sub23', options: ['Todos', 'Sí', 'No'] },
                    { label: 'Rendimiento', key: 'rendimiento', options: filterOptions.rendimiento },
                    { label: 'Sistema de Juego', key: 'sistemaJuego', options: filterOptions.sistemaJuego },
                    { label: 'Comunidad Autónoma de Nacimiento', key: 'comunidadAutonoma', options: filterOptions.comunidad },
                    { label: 'Contrato Hasta', key: 'contrato', options: filterOptions.contrato }
                  ].filter(field => {
                    if (activeTab === 'pitch') {
                      return !['posicion', 'pieHabil', 'sistemaJuego'].includes(field.key);
                    }
                    return true;
                  }).map(field => (
                    <div key={field.label} className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{field.label}</label>
                      <select 
                        value={filters[field.key as keyof typeof filters]}
                        onChange={(e) => setFilters({...filters, [field.key]: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tenerife-blue appearance-none"
                      >
                        {field.options.map(opt => <option key={opt} value={opt} className="bg-tenerife-dark">{opt}</option>)}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

        <main className="flex-1 overflow-y-auto p-6 md:p-10 w-full relative">
          <div className="max-w-[1600px] mx-auto space-y-8">

            {activeTab === 'pitch' ? (
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-center max-w-[1400px] mx-auto">
                {/* Tactical Pitch Container */}
                <div className="w-full lg:flex-1 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 space-y-4 sm:space-y-0">
                    <div className="flex items-center justify-between w-full sm:w-auto">
                      <h2 className="text-xl md:text-3xl font-black tracking-tighter uppercase flex items-center text-white">
                        <Activity className="w-5 h-5 md:w-6 md:h-6 text-tenerife-blue mr-3 md:mr-4 shadow-[0_0_10px_rgba(0,84,166,0.5)]" />
                        Vista Táctica
                      </h2>
                      <button 
                        onClick={async () => {
                          const node = document.getElementById('tactical-pitch-container');
                          if (node) {
                            try {
                              const dataUrl = await htmlToImage.toJpeg(node, { 
                                quality: 0.95,
                                backgroundColor: '#0a0a0c',
                                pixelRatio: 2,
                                style: { borderRadius: '0' }
                              });
                              const link = document.createElement('a');
                              link.download = `campograma_tenerife_${selectedCategory.replace(' ', '_')}.jpg`;
                              link.href = dataUrl;
                              link.click();
                            } catch (error) {
                              console.error('Error exporting image:', error);
                            }
                          }
                        }}
                        className="sm:hidden flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
                      >
                        <ImageIcon className="w-4 h-4" />
                        <span>JPG</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto">
                      <div className="flex flex-col items-start sm:items-end">
                        <p className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest">DIRECCIÓN DEPORTIVA 26-27</p>
                        <p className="text-[7px] md:text-[9px] text-tenerife-blue font-display font-black md:tracking-[0.4em] tracking-wider uppercase text-glow">App creada por Manel Losada</p>
                      </div>
                      <button 
                        onClick={async () => {
                          const node = document.getElementById('tactical-pitch-container');
                          if (node) {
                            try {
                              const dataUrl = await htmlToImage.toJpeg(node, { 
                                quality: 0.95,
                                backgroundColor: '#0a0a0c',
                                pixelRatio: 2,
                                style: { borderRadius: '0' }
                              });
                              const link = document.createElement('a');
                              link.download = `campograma_tenerife_${selectedCategory.replace(' ', '_')}.jpg`;
                              link.href = dataUrl;
                              link.click();
                            } catch (error) {
                              console.error('Error exporting image:', error);
                            }
                          }
                        }}
                        className="hidden sm:flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
                      >
                        <ImageIcon className="w-4 h-4" />
                        <span>Exportar Campograma</span>
                      </button>
                    </div>
                  </div>
                  
                  <div id="tactical-pitch-container" className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-tenerife-blue/20 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <TacticalPitch 
                      players={filteredPlayers} 
                      onPlayerClick={handlePlayerClick} 
                      onPositionClick={(pos) => setSelectedPosition(pos)}
                      selectedPosition={selectedPosition}
                    />
                  </div>
                </div>

                {/* Top 10 Sidebar - Floating & Centered in its column */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full lg:w-[380px] lg:sticky lg:top-24 space-y-6"
                >
                  <div className="glass rounded-[2.5rem] p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tenerife-blue/5 blur-3xl rounded-full -mr-16 -mt-16" />
                    
                    <div className="flex justify-between items-center mb-8 relative z-10">
                      <div className="space-y-1">
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                          TOP 10 {selectedPosition || 'POSICIÓN'}
                        </h3>
                        <div className="h-0.5 w-12 bg-tenerife-blue rounded-full" />
                      </div>
                      {selectedPosition && (
                        <button 
                          onClick={() => {
                            setSelectedPosition(null);
                            setQuickViewPlayer(null);
                          }}
                          className="text-[9px] font-black text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
                        >
                          Limpiar
                        </button>
                      )}
                    </div>

                    {selectedPosition ? (
                      <div className="space-y-4 relative z-10">
                        {topInPosition.length > 0 ? (
                          topInPosition.map((p, i) => (
                            <motion.div 
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              key={`${p.nombre}-${p.equipo}-${p.categoria}-${i}`} 
                              className={cn(
                                "relative bg-white/5 rounded-2xl p-4 border transition-all group cursor-pointer overflow-hidden",
                                (quickViewPlayer?.nombre === p.nombre) 
                                  ? "border-tenerife-blue/50 bg-tenerife-blue/10 shadow-[0_0_20px_rgba(0,84,166,0.1)]" 
                                  : "border-white/5 hover:border-white/10 hover:bg-white/[0.07]"
                              )}
                              onClick={() => setQuickViewPlayer(p)}
                            >
                              {p.nombre === quickViewPlayer?.nombre && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-tenerife-blue" />
                              )}
                              
                              <div className="flex items-start space-x-4">
                                <div className="relative">
                                  <img 
                                    src={p.foto || `https://ui-avatars.com/api/?name=${p.nombre}&background=0054a6&color=fff`} 
                                    className="w-16 h-16 rounded-xl object-cover border border-white/10 shadow-lg" 
                                    referrerPolicy="no-referrer" 
                                  />
                                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-tenerife-dark border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-black text-white">
                                    {i + 1}
                                  </div>
                                  {p.sub23 === 'Sí' && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-tenerife-dark shadow-lg" title="Sub-23" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-start">
                                    <div className="pr-2">
                                      <h4 className="text-sm font-black text-white uppercase truncate tracking-tighter leading-tight">{p.nombre}</h4>
                                      <p className="text-[10px] text-gray-500 font-bold uppercase truncate mt-0.5">{p.equipo}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                      <div className="flex items-center text-yellow-500">
                                        <Star className="w-3 h-3 mr-1 fill-current" />
                                        <span className="text-xs font-black">{p.nota.toFixed(2)}</span>
                                      </div>
                                      <span className="text-[8px] text-gray-600 font-black uppercase tracking-tighter mt-1">{p.categoria}</span>
                                    </div>
                                  </div>
                                  <div className="mt-3 flex justify-between items-center">
                                    <div className="flex space-x-3">
                                      <span className="text-[9px] text-gray-600 font-bold uppercase">{p.minutos} min</span>
                                      <span className="text-[9px] text-gray-600 font-bold uppercase">{p.pie_habil}</span>
                                    </div>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedPlayer(p);
                                      }}
                                      className="text-[9px] font-black text-tenerife-blue uppercase tracking-widest hover:text-white transition-colors flex items-center group/btn"
                                    >
                                      FICHA
                                      <ChevronRight className="w-3 h-3 ml-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <div className="py-20 text-center space-y-4">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/5">
                              <User className="w-8 h-8 text-gray-600" />
                            </div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                              No hay jugadores<br/>en esta posición
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="py-32 text-center space-y-6 relative z-10">
                        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/5 animate-pulse-glow">
                          <Trophy className="w-12 h-12 text-gray-700" />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                            Selección de Posición
                          </p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest max-w-[220px] mx-auto leading-relaxed">
                            Haz clic en el campo para analizar los mejores perfiles por demarcación
                          </p>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Quick Stats Card */}
                  {selectedPosition && topInPosition.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/5 border border-white/10 rounded-3xl p-6"
                    >
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-4">Resumen de Posición</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <p className="text-[9px] text-gray-600 font-bold uppercase">Media Nota</p>
                          <p className="text-lg font-black text-white">
                            {(topInPosition.reduce((acc, p) => acc + p.nota, 0) / topInPosition.length).toFixed(2)}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[9px] text-gray-600 font-bold uppercase">Sub-23</p>
                          <p className="text-lg font-black text-green-500">
                            {topInPosition.filter(p => p.sub23 === 'Sí').length}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ) : (
              <div id="master-table-container" className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                      <TableIcon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl font-black text-white uppercase tracking-tighter">DIRECCIÓN DEPORTIVA 26-27</h2>
                      <p className="text-[9px] text-tenerife-blue font-display font-black tracking-[0.4em] uppercase text-glow">App creada por Manel Losada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      {filteredPlayers.length} Jugadores encontrados
                    </span>
                    <button 
                      onClick={() => {
                        // Prepare data for Excel: rename headers and remove non-essential fields (like foto)
                        const excelData = filteredPlayers.map(p => ({
                          'Jugador': p.nombre,
                          'Equipo': p.equipo,
                          'Categoría': p.categoria,
                          'Posición': p.posicion,
                          'Nota': p.nota,
                          'Año': p.ano,
                          'Minutos': p.minutos,
                          '% Titularidad': p.porc_titular,
                          'Pie Hábil': p.pie_habil,
                          'Contrato hasta': p.contrato_hasta,
                          'Sub-23': p.sub23,
                          'Sistema de Juego': p.sistema_juego,
                          'Rendimiento': p.rendimiento,
                          'Grupo': p.grupo
                        }));

                        const worksheet = XLSX.utils.json_to_sheet(excelData);
                        const workbook = XLSX.utils.book_new();
                        XLSX.utils.book_append_sheet(workbook, worksheet, "Scouting");
                        
                        // Auto-size columns (basic implementation)
                        const wscols = [
                          {wch: 25}, // Jugador
                          {wch: 20}, // Equipo
                          {wch: 15}, // Categoría
                          {wch: 20}, // Posición
                          {wch: 8},  // Nota
                          {wch: 8},  // Año
                          {wch: 10}, // Minutos
                          {wch: 15}, // % Titularidad
                          {wch: 12}, // Pie Hábil
                          {wch: 15}, // Contrato hasta
                          {wch: 10}, // Sub-23
                          {wch: 15}, // Sistema de Juego
                          {wch: 15}, // Rendimiento
                          {wch: 10}  // Grupo
                        ];
                        worksheet['!cols'] = wscols;

                        XLSX.writeFile(workbook, `scouting_tenerife_${selectedCategory.replace(' ', '_')}.xlsx`);
                      }}
                      className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Exportar Tabla</span>
                    </button>
                  </div>
                </div>

                {/* Master Table */}
                <div id="master-table" className="bg-tenerife-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Vista Desktop: Tabla Estándar */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-white/5 text-[10px] uppercase tracking-widest font-black text-gray-500 border-b border-white/5">
                          <th className="px-6 py-5">Jugador</th>
                          <th className="px-6 py-5 hidden sm:table-cell">Equipo</th>
                          <th className="px-6 py-5">Posición</th>
                          <th className="px-6 py-5">Nota</th>
                          <th className="px-6 py-5 hidden md:table-cell">Año</th>
                          <th className="px-6 py-5 hidden lg:table-cell">Minutos</th>
                          <th className="px-6 py-5 hidden md:table-cell">% Tit.</th>
                          <th className="px-6 py-5 text-right">VER INFORME</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredPlayers.map((p, i) => (
                          <tr 
                            key={`${p.nombre}-${p.equipo}-${p.categoria}-${i}`} 
                            className="hover:bg-white/[0.02] transition-colors group"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-3">
                                <img 
                                  src={p.foto || `https://ui-avatars.com/api/?name=${p.nombre}&background=0054a6&color=fff`} 
                                  className="w-10 h-10 rounded-full border border-white/10 object-cover" 
                                  referrerPolicy="no-referrer" 
                                />
                                <div className="flex flex-col min-w-0">
                                  <span className="text-sm font-bold text-white group-hover:text-gold transition-colors truncate">{p.nombre}</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-xs text-gray-400 font-medium hidden sm:table-cell">{p.equipo}</td>
                            <td className="px-6 py-4">
                              <span className="text-[10px] font-black px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 uppercase tracking-wider">
                                {p.posicion_principal || p.posicion}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className={cn(
                                "inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-black",
                                p.nota >= 7.1 
                                  ? "bg-gold/20 text-gold border-gold/30 shadow-[0_0_15px_rgba(0,84,166,0.1)]" 
                                  : p.nota >= 7.0
                                    ? "bg-white/10 text-gray-300 border-white/10"
                                    : p.nota >= 6.0
                                      ? "bg-blue-500/20 text-blue-400 border-blue-500/20"
                                      : "bg-red-500/20 text-red-400 border-red-500/20"
                              )}>
                                <span>{p.nota.toFixed(2)}</span>
                                {p.nota > 7 && <Star className="w-3 h-3 fill-current" />}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-xs text-white font-bold hidden md:table-cell">{p.ano}</td>
                            <td className="px-6 py-4 text-xs text-gray-400 hidden lg:table-cell">{p.minutos}</td>
                            <td className="px-6 py-4 text-xs text-gray-400 hidden md:table-cell">{p.porc_titular}%</td>
                            <td className="px-6 py-4 text-right">
                              <button 
                                onClick={() => setSelectedPlayer(p)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-all text-gray-500 hover:text-white border border-transparent hover:border-white/10"
                              >
                                <Maximize2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Vista Móvil: Cards de Información Completa */}
                  <div className="sm:hidden divide-y divide-white/5">
                    {filteredPlayers.map((p, i) => (
                      <div key={`${p.nombre}-${i}-mobile`} className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={p.foto || `https://ui-avatars.com/api/?name=${p.nombre}&background=0054a6&color=fff`} 
                              className="w-12 h-12 rounded-full border border-white/10 object-cover" 
                              referrerPolicy="no-referrer" 
                            />
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-white">{p.nombre}</span>
                              <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{p.equipo}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={cn(
                              "px-2.5 py-1 rounded-lg border text-[10px] font-black",
                              p.nota >= 7.1 
                                ? "bg-gold/20 text-gold border-gold/30" 
                                : p.nota >= 7.0
                                  ? "bg-white/10 text-gray-300 border-white/10"
                                  : "bg-blue-500/20 text-blue-400 border-blue-500/20"
                            )}>
                              {p.nota.toFixed(2)}
                            </div>
                            <button 
                              onClick={() => setSelectedPlayer(p)}
                              className="p-2 bg-white/5 rounded-xl border border-white/10 text-white"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                            <p className="text-[7px] text-gray-500 font-black uppercase tracking-widest mb-1">Posición</p>
                            <p className="text-[10px] font-bold text-white truncate">{p.posicion_principal || p.posicion}</p>
                          </div>
                          <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                            <p className="text-[7px] text-gray-500 font-black uppercase tracking-widest mb-1">Año Nacimiento</p>
                            <p className="text-[10px] font-bold text-white">{p.ano}</p>
                          </div>
                          <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                            <p className="text-[7px] text-gray-500 font-black uppercase tracking-widest mb-1">Minutos Jugados</p>
                            <p className="text-[10px] font-bold text-white">{p.minutos}</p>
                          </div>
                          <div className="bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                            <p className="text-[7px] text-gray-500 font-black uppercase tracking-widest mb-1">% Titularidad</p>
                            <p className="text-[10px] font-bold text-white">{p.porc_titular}%</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <footer className="h-12 border-t border-white/5 flex items-center justify-center bg-tenerife-dark px-4 text-center">
        <p className="text-[8px] md:text-[10px] text-gray-500 font-display font-black md:tracking-[0.3em] tracking-wider uppercase text-glow">
          DIRECCIÓN DEPORTIVA 26-27 | App creada por Manel Losada
        </p>
      </footer>

      <AnimatePresence>
        {selectedPlayer && (
          <PlayerModal 
            player={selectedPlayer} 
            onClose={() => setSelectedPlayer(null)} 
            topInPosition={allPlayers.filter(p => p.posicion === selectedPlayer.posicion && p.categoria === selectedPlayer.categoria).sort((a, b) => b.nota - a.nota).slice(0, 10)}
          />
        )}
      </AnimatePresence>

      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-6 right-6 lg:hidden z-50 bg-tenerife-blue p-4 rounded-full shadow-2xl shadow-blue-500/40"
      >
        {sidebarOpen ? <X /> : <Filter />}
      </button>

      {loading && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center overflow-hidden">
          <div className="scanline" />
          <div className="bg-tenerife-card/50 p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center space-y-6 glass relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay opacity-10" />
            <div className="relative">
              <div className="w-20 h-20 border-4 border-tenerife-blue/20 border-t-tenerife-blue rounded-full animate-spin shadow-[0_0_20px_rgba(0,84,166,0.3)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/CD_Tenerife_logo.svg/1200px-CD_Tenerife_logo.svg.png" 
                  className="w-8 h-8 object-contain animate-pulse" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-black text-white tracking-widest uppercase mb-1">Sincronizando</p>
              <p className="text-[10px] text-tenerife-blue font-bold tracking-[0.4em] uppercase animate-pulse">Base de Datos Scouting</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
