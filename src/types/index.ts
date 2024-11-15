import { object, string, number, InferOutput, array} from 'valibot'

export const DraftPatnerSchema = object({
    numero_socio: string(),
    fecha_apertura: string(),
    nombre: string(),
    apellido_paterno: string(),
    apellido_materno: string(),
    comunidad: string(),
    municipio: string(),
    cantidad: number(),
});

export const PatnerSchema = object({
    id: number(),
    numero_socio: string(),
    fecha_apertura: string(),
    nombre: string(),
    apellido_paterno: string(),
    apellido_materno: string(),
    comunidad: string(),
    municipio: string(),
    cantidad: number(),
});

export const PatnersSchema = array(PatnerSchema);
export type Patner =  InferOutput< typeof PatnerSchema > ;