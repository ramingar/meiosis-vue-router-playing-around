const state = {
    text1: '',
    text2: ''
};

const actions = update => {
    const setText1 = newText => update({text1: newText});
    const setText2 = newText => update({text2: newText});

    return {setText1, setText2}
};

const store = {
    state,
    actions
};

export {store}
