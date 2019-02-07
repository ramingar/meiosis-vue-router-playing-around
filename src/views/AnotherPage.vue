<template>
    <div class="about">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            <div>This is text2: <span>{{text2}}</span></div>
            <input type="text"
                   @keyup="setText2"
            />
        </div>
    </div>
</template>

<script>
    import {actions, state} from "../meiosis";

    export default {
        name    : 'AnotherPage',
        data    : () => ({reactivity: state}),
        methods : {
            setText2: (e) => actions.setText2(e.target.value)
        },
        computed: {
            text2: () => state.text2
        }
    }
</script>