ServerEvents.recipes(event => {
  event.shaped('tfccanes:walking_cane', [
    'A  ',
    ' B ',
    '  B'
  ], {
    A: '#tfc:lumber',
    B: '#forge:rods/wooden'
  })

  event.shaped('tfccanes:refined_walking_cane', [
    'A  ',
    ' B ',
    '  B'
  ], {
    A: '#forge:ingots/wrought_iron',
    B: '#forge:rods/wrought_iron'
  })
})