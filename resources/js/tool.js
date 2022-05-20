import Tool from './components/Tool.vue'
Nova.booting((Vue, router, store) => {
    router.addRoutes([{
        name: 'nova-translation-editor',
        path: '/nova-translation-editor',
        component: Tool,
    }])
})
