ServerEvents.recipes(event => {

    event.remove({ output: 'vs_eureka:engine' })
    event.shaped('vs_eureka:engine', [
        'AAA',
        'CED',
        'BBB'
    ], {
        A: '#tfc:rock/raw',
        B: '#tfc:rock/smooth',
        C: 'gtceu:wrought_iron_ingot',
        D: '#forge:glass_panes',
        E: 'gtceu:steel_brick_casing'

    })

    event.remove({ output: 'vs_eureka:ballast' })
    event.shaped('vs_eureka:ballast', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: '#tfc:rock/raw',
        B: '#forge:cobblestone'
    })

    event.remove({ output: 'vs_eureka:oak_ship_helm' })
    event.shaped('vs_eureka:oak_ship_helm', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:stick',
        B: 'tfc:wood/planks/oak_fence',
        C: 'minecraft:gold_ingot',
        D: 'tfc:wood/planks/oak_slab'
    })

    event.remove({ output: 'vs_eureka:spruce_ship_helm' })
    event.shaped('vs_eureka:spruce_ship_helm', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:stick',
        B: 'tfc:wood/planks/spruce_fence',
        C: 'minecraft:gold_ingot',
        D: 'tfc:wood/planks/spruce_slab'
    })

    event.remove({ output: 'vs_eureka:acacia_ship_helm' })
    event.shaped('vs_eureka:acacia_ship_helm', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:stick',
        B: 'tfc:wood/planks/acacia_fence',
        C: 'minecraft:gold_ingot',
        D: 'tfc:wood/planks/acacia_slab'
    })

    event.remove({ output: 'vs_eureka:birch_ship_helm' })
    event.shaped('vs_eureka:birch_ship_helm', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:stick',
        B: 'tfc:wood/planks/birch_fence',
        C: 'minecraft:gold_ingot',
        D: 'tfc:wood/planks/birch_slab'
    })
})