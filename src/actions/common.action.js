import { COMMON_ACTION } from '../constants';

export function changeThemeAction(payload) {
    return {
        type: COMMON_ACTION.CHANGE_THEME,
        payload:payload
    }
};