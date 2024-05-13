ServerEvents.recipes(event => {
    // заменил 'minecraft:blast_furnace' на 'gtceu:steel_brick_casing' и починил ванильные камни
    event.shaped('vs_eureka:engine', [
        'AAA',
        'CED',
        'BBB'
    ], {
        A: 'tfc:rock/row/*',
        B: 'tfc:rock/smooth/*',
        C: 'gtceu:wrought_iron_ingot',
        D: 'forge:glass_panes',
        E: 'gtceu:steel_brick_casing'
        
    })
})