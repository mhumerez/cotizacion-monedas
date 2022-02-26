export interface Issue {

    issueNo: number;
    fecha: number;
    pais: string;
    precio: number;
    indicador: 'up' | 'down';
    diario: number;
    porcentaje: number;
    semanal: number;
    mensual: number;
    anual: number;
}
