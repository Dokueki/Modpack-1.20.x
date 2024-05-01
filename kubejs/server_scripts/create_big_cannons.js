ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', 'createbigcannons:spring_wire')
    event.add('c:hidden_from_recipe_viewers', '/.*cast_iron.*/')
    event.add('c:hidden_from_recipe_viewers', '/.*nethersteel.*/')
})

ServerEvents.recipes(event => {
    event.remove({ output: '/.*cast_iron.*/' })
    event.remove({ output: '/.*nethersteel.*/' })

    //

    event.remove({ output: 'createbigcannons:spring_wire' })
    event.remove({ output: 'createbigcannons:recoil_spring' })

    event.recipes.createSequencedAssembly([
        'createbigcannons:recoil_spring',
    ], '#forge:springs/iron', [
        event.recipes.createPressing('createbigcannons:partial_recoil_spring', 'createbigcannons:partial_recoil_spring'),
    ]).transitionalItem('createbigcannons:partial_recoil_spring').loops(3)

    event.recipes.createCutting('3x createbigcannons:partial_recoil_spring', '#forge:springs/steel')

    event.recipes.createSequencedAssembly([
        'createbigcannons:recoil_spring',
    ], 'createbigcannons:partial_recoil_spring', [
        event.recipes.createPressing('createbigcannons:partial_recoil_spring', 'createbigcannons:partial_recoil_spring'),
    ]).transitionalItem('createbigcannons:partial_recoil_spring').loops(3)

    //

    event.remove({ output: 'createbigcannons:basin_foundry_lid' })
    event.remove({ output: 'createbigcannons:ap_shot' })
    event.remove({ output: 'createbigcannons:ap_autocannon_round' })
    event.remove({ output: 'createbigcannons:casting_sand' })

    event.shaped('createbigcannons:basin_foundry_lid', [
        ' B ',
        'AAA',
        '   '
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:ingots/wrought_iron'
    })

    event.shaped('createbigcannons:ap_shot', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'gtceu:wrought_iron_ingot',
        B: 'minecraft:iron_ingot',
        C: '#minecraft:wooden_slabs'
    })

    event.shaped('createbigcannons:ap_autocannon_round', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'gtceu:wrought_iron_ingot',
        B: 'minecraft:iron_ingot'
    })

    event.shaped('createbigcannons:casting_sand', [
        'AAB',
        'C  ',
        '   '
    ], {
        A: '#forge:sand',
        B: '#tfc:dirt',
        C: 'minecraft:clay_ball'
    })

    //

    event.replaceInput({ output: '/createbigcannons:.*_cannon_.*/' },
        'minecraft:gunpowder',
        'tfc:glue'
    )

    event.replaceInput({ output: '/createbigcannons:cannon_.*/' },
        'minecraft:gunpowder',
        'minecraft:leather'
    )

    event.replaceInput({ output: '/createbigcannons:wrought_iron_.*/' },
        'minecraft:iron_ingot',
        '#forge:ingots/wrought_iron'
    )

    event.replaceInput({ output: '/createbigcannons:wrought_iron_.*/' },
        'gtceu:iron_plate',
        '#forge:plates/wrought_iron'
    )

    event.replaceInput({ output: '/createbigcannons:wrought_iron_.*/' },
        'minecraft:iron_bars',
        '#forge:rods/wrought_iron'
    )

    event.replaceInput({ output: 'createbigcannons:yaw_controller' },
        'minecraft:gunpowder',
        'minecraft:leather'
    )

    event.replaceInput({ mod: 'createbigcannons' },
        'minecraft:iron_bars',
        '#forge:rods/iron'
    )

    event.replaceInput({ mod: 'createbigcannons' },
        'minecraft:nether_quartz',
        'gtceu:quartzite_gem'
    )
})