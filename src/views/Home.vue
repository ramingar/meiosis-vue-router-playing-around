<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            <div>This is text1: <span>{{text1}}</span></div>
            <input type="text"
                   @keyup="setText1"
            />
        </div>
    </div>
</template>

<script>
    import {actions, state} from "../meiosis";

    export default {
        name    : 'Home',
        data    : () => ({reactivity: state}),
        methods : {
            setText1: (e) => actions.setText1(e.target.value)
        },
        computed: {
            text1: () => state.text1
        }
    }
</script>
