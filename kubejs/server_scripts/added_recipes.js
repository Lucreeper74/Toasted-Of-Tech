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

    e.shaped('mob_grinding_utils:saw', [
        'SDS',
        'CRC',
        'DID'
      ], {
        S: 'minecraft:iron_sword',
        D: 'minecraft:diamond',
        C: 'create:crushing_wheel',
        R: 'minecraft:redstone_block',
        I: 'minecraft:iron_block'
    }).id(`kjs:crafting/mob_grinding_utils/saw`)

    e.blasting('biggerreactors:graphite_ingot', 'createmetallurgy:graphite')
})
