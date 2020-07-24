import { lang } from '../utils/Types';

export default faction;

type faction = {
    faction_id: string,
    name: lang,
    image_set_id: string,
    image_id: string,
    image_path: string,
    code_tag: string,
    user_selectable: string,
}
