export interface Player {
  nombre: string;
  foto: string;
  equipo: string;
  posicion: string;
  nota: number;
  ano: number;
  minutos: number;
  porc_titular: number;
  rendimiento: string;
  contrato_hasta: string;
  comunidad_autonoma: string;
  pie_habil: string;
  sub23: string;
  sistema_juego: string;
  titular_indiscutible?: string;
  grupo: string;
  distancia_tenerife?: number;
  categoria?: string;
  [key: string]: any;
}

export const CATEGORIES = {
  '1ª RFEF': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJJ7jBv2lNB-c3Jd-bapSpDU3denFh2EDF2ifooLATiZa_Hy5zo413Sm3mmtnEIvwHAkn6P-K6WS3s/pub?output=csv',
  '2ª RFEF': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdOm45BizzKaVeiZ-qxZkXhcZGaw6dHw7JcRdOh6z8uP7HBgx5W-I38BvwVtdq7phGl6SChU9zvEqv/pub?gid=0&single=true&output=csv',
  '3ª RFEF': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSR-aKZxY0bV3l19-XBp7kFNODSOXWI7T3rWBe5MGO_vnVpVUURFkMbTXIPf5Z60E_dTLaotEN01Ktf/pub?output=csv',
};

export const POSITIONS = [
  'Portero',
  'Central',
  'Lateral Derecho',
  'Lateral Izquierdo',
  'Pivote Defensivo',
  'Mediocentro',
  'Medio Derecho',
  'Medio Izquierdo',
  'Extremo Derecho',
  'Extremo Izquierdo',
  'Mediapunta',
  'Delantero'
];
