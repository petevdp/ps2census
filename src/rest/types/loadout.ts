import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    loadout_id: string,
    profile_id: string,
    faction_id: string,
    code_name: string,
};

export type query = {
    code_name: string,
    faction_id: string,
    loadout_id: string,
    profile_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('loadout');
