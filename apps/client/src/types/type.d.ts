import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        beforeCreate(): void | Promise<void>;

        created(): void | Promise<void>;

        beforeMount(): void | Promise<void>;

        mounted(): void | Promise<void>;

        beforeUpdate(): void | Promise<void>;

        updated(): void | Promise<void>;

        beforeDestroy(): void | Promise<void>;

        destroyed(): void | Promise<void>;
    }
}
