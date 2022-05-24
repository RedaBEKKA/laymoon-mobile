const SET_MESSAGES = 'SET_MESSAGES';
const SET_CHANNELS = 'SET_CHANNELS';

export const setMessages = messages => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const setChannels = channels => ({
    type: SET_CHANNELS,
    payload: channels,
});