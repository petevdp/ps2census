import { requestFactory } from '../utils/Helpers';
import characterWorld from '../types/characterWorld';

export type typeData = characterWorld;

export type query = Partial<{
    character_id: string,
    world_id: string
}>;

export type resolve = never;

export default requestFactory<'characters_world'>('characters_world');
