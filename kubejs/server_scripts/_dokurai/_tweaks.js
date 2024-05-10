ServerEvents.recipes(event => {
    event.remove({ 
        input: 'minecraft:slime_ball',
        output: 'minecraft:slime_block'
    })

    event.shapeless('minecraft:slime_ball', [
        'tfc:glue',
        '#forge:dyes/green'
    ])

    event.recipes.createSplashing([
        'tfc:glue',
    ], 'minecraft:slime_ball')
})