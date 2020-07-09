const routes = [
    {
        path: "/child/:num",
        name: "child",
        component: () => import("./Child")
    },
    {
        path: "/child1/:id",
        component: () => import("./Child1")
    },
    {
        path: "child2",
        name: "childView",
        component: () => import("Child2")
    },
    {
        path: "child3",
        name: "child3",
        component: () => import("Child3")
    }
]