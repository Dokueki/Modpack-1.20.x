ServerEvents.recipes(event => {
  event.replaceInput({ mod: 'create_interactive' },
    'create:iron_sheet',
    '#forge:sheets/iron'
  )

  event.replaceInput({ mod: 'create_interactive' },
    'minecraft:slime_ball',
    'tfc:glue',
  )
})