ServerEvents.recipes(e => {
    e.shaped('create:belt_connector', [
        '   ',
        'RRR',
        'RRR'
      ], {
        R: 'thermal:cured_rubber'
    }).id(`kjs:crafting/thermal/cured_rubber`)

    e.shaped('waterstrainer:string_mesh', [
      ' S ',
      'SSS',
      ' S '
    ], {
      S: 'minecraft:string'
  }).id(`kjs:crafting/waterstrainer/string_mesh`)

  e.blasting('biggerreactors:graphite_ingot', 'createmetallurgy:graphite')
})