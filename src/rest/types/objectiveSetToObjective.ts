import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    objective_set_id: string,
    objective_group_id: string,
};

export type query = {
    objective_group_id: string,
    objective_set_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('objectiveSetToObjective');
