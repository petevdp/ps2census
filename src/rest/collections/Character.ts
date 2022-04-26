export type Character = {
  collection: 'character';
  format: {
    character_id: string;
    name: { first: string; first_lower: string };
    faction_id: string;
    head_id: string;
    title_id: string;
    times: {
      creation: string;
      creation_date: string;
      last_save: string;
      last_save_date: string;
      last_login: string;
      last_login_date: string;
      login_count: string;
      minutes_played: string;
    };
    certs: {
      earned_points: string;
      gifted_points: string;
      spent_points: string;
      available_points: string;
      percent_to_next: string;
    };
    battle_rank: { percent_to_next: string; value: string };
    profile_id: string;
    daily_ribbon: { count: string; time: string; date: string };
    prestige_level: string;
  };
  paths:
    | 'character_id'
    | 'name.first'
    | 'name.first_lower'
    | 'faction_id'
    | 'head_id'
    | 'title_id'
    | 'times.creation'
    | 'times.creation_date'
    | 'times.last_save'
    | 'times.last_save_date'
    | 'times.last_login'
    | 'times.last_login_date'
    | 'times.login_count'
    | 'times.minutes_played'
    | 'certs.earned_points'
    | 'certs.gifted_points'
    | 'certs.spent_points'
    | 'certs.available_points'
    | 'certs.percent_to_next'
    | 'battle_rank.percent_to_next'
    | 'battle_rank.value'
    | 'profile_id'
    | 'daily_ribbon.count'
    | 'daily_ribbon.time'
    | 'daily_ribbon.date'
    | 'prestige_level';
  partialPaths:
    | 'character_id'
    | 'name'
    | 'name.first'
    | 'name.first_lower'
    | 'faction_id'
    | 'head_id'
    | 'title_id'
    | 'times'
    | 'times.creation'
    | 'times.creation_date'
    | 'times.last_save'
    | 'times.last_save_date'
    | 'times.last_login'
    | 'times.last_login_date'
    | 'times.login_count'
    | 'times.minutes_played'
    | 'certs'
    | 'certs.earned_points'
    | 'certs.gifted_points'
    | 'certs.spent_points'
    | 'certs.available_points'
    | 'certs.percent_to_next'
    | 'battle_rank'
    | 'battle_rank.percent_to_next'
    | 'battle_rank.value'
    | 'profile_id'
    | 'daily_ribbon'
    | 'daily_ribbon.count'
    | 'daily_ribbon.time'
    | 'daily_ribbon.date'
    | 'prestige_level';
  conditions: {
    battle_rank?: string;
    'battle_rank.percent_to_next'?: string;
    'battle_rank.value'?: string;
    certs?: string;
    'certs.available_points'?: string;
    'certs.earned_points'?: string;
    'certs.gifted_points'?: string;
    'certs.percent_to_next'?: string;
    'certs.spent_points'?: string;
    character_id?: string;
    daily_ribbon?: string;
    'daily_ribbon.count'?: string;
    'daily_ribbon.date'?: string;
    'daily_ribbon.time'?: string;
    faction_id?: string;
    head_id?: string;
    name?: string;
    'name.first'?: string;
    'name.first_lower'?: string;
    prestige_level?: string;
    profile_id?: string;
    times?: string;
    'times.creation'?: string;
    'times.creation_date'?: string;
    'times.last_login'?: string;
    'times.last_login_date'?: string;
    'times.last_save'?: string;
    'times.last_save_date'?: string;
    'times.login_count'?: string;
    'times.minutes_played'?: string;
    title_id?: string;
  };
  resolve:
    | 'item'
    | 'item_full'
    | 'profile'
    | 'faction'
    | 'stat'
    | 'stat_by_faction'
    | 'weapon_stat'
    | 'weapon_stat_by_faction'
    | 'stat_history'
    | 'online_status'
    | 'friends'
    | 'world'
    | 'outfit'
    | 'outfit_member'
    | 'outfit_member_extended'
    | 'currency';
};
