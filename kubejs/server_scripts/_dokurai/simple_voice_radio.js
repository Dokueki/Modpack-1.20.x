ServerEvents.tags('item', event => {
  //event.add('c:hidden_from_recipe_viewers', '/simpleradio:.*_module/')
})

ServerEvents.recipes(event => {
  //event.remove({ output: '/simpleradio:.*_module/' })

  event.replaceInput({ mod: 'simpleradio' },
    'minecraft:iron_ingot',
    '#forge:sheets/wrought_iron'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'minecraft:polished_deepslate',
    '#forge:smooth_stone'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'simpleradio:receiving_module',
    'gtceu:lv_sensor'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'simpleradio:speaker_module',
    'minecraft:note_block'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'simpleradio:transmitting_module',
    'gtceu:lv_emitter'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'minecraft:redstone_torch',
    '#forge:rods/copper'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'minecraft:amethyst_shard',
    'gtceu:quartzite_gem'
  )

  event.replaceInput({ mod: 'simpleradio' },
    'minecraft:redstone',
    '#gtceu:batteries/lv'
  )
})