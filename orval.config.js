module.exports = {
    main: {
        input: './src/6shared/api/schema.yaml',
        output: {
            target: "./src/6shared/api/generated.ts",
            prettier: true,
            override: {
                mutator: {
                    path: "./src/6shared/api/api-instance.ts",
                    name: "createInstance",
                },
            },
        },
    },
};
