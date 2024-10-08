export default {
  name: 'militaryCarePackages',
  title: 'Military Care Packages',
  type: 'document',
  fields: [
    {
      name: 'overview',
      title: 'Overview',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Overview',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue:
            "Military care packages deliver a welcome piece of home to your service member while they're away - whether that's your child, fiancé, sibling or friend. They help both of you stay connected despite distance or duty. Here at the US Armygo, we provide some appropriate ways to send those care packages to your service member throughout their time in the military.",
        },
      ],
    },
    {
      name: 'militaryCarePackageList',
      title: 'Military Care Package List',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'MILITARY CARE PACKAGE LIST',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue:
            'Service members who have finished basic training or are on deployment generally have more freedom to receive care packages. Sending a military care package is a great way to show your appreciation and love for your service member and all they do for our country.',
        },
        {
          name: 'suggestions',
          title: 'Suggestions',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Necessities: sunblock, socks, underwear, flip-flops, lip balm, powder',
            'Snacks: chips, salsa, nuts, cookies, beef jerky, non-melting candy, trail mix',
            'Homemade foods: cookies, “cake in a jar”',
            'Gaming items: playing cards, puzzle books',
            'Stationeries: paper, envelopes, address labels, pens (no stamps needed)',
            'Photos and notes: tear-off calendar with encouraging notes',
          ],
        },
      ],
    },
    {
      name: 'miniCarePackage',
      title: 'Mini Care Package',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'MINI CARE PACKAGE',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            '5PRO Natural Whey Protein - 2lb',
            'Protein Shaker Bottle',
            'Strike Force Energy - 10 Packets',
            "Lenny & Larry's Protein Cookie",
            'Kodiak Protein Cups',
            '5-hour Energy',
            'Four Points Tactical Protein bars',
            'One Nation Coffee 12oz',
            'Mug',
            'Eat Your Coffee',
            "Nonni's Almond Cioccolati Biscotti",
            'Biscottio Brothers Almond Biscotti',
            'Personal Pictures',
          ],
        },
        {
          name: 'price',
          title: 'Price',
          type: 'string',
          initialValue: '$800 plus shipping',
        },
      ],
    },
    {
      name: 'airbourneCarePackage',
      title: 'Airbourne Care Package',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'AIRBOURNE CARE PACKAGE',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'KickAss Original Jerky 3oz (1)',
            'KickAss Teriyaki Snack Sticks (1)',
            'KickAss Garlic Snack Sticks (1)',
            'KickAss Bacon and Cheddar Stick (1)',
            'Skittles (1)',
            'Oreos (1)',
            'Twizzlers (1)',
            'Rice Krispies Treat (1)',
            '5PRO Natural Whey Protein - 5lb (1)',
            'Protein Shaker Bottle (1)',
            'Strike Force Energy - (10 Packets)',
            "Lenny & Larry's Protein Cookies (3)",
            'Kodiak Protein Cups (2)',
            '5-hour Energy (2)',
            'Trolli Sour Worms (1)',
            'Sour Patch Kids (1)',
            'Flaming Hot Cheetos (1)',
            'Chex Mix (1)',
            'Lifesavers (1)',
          ],
        },
        {
          name: 'price',
          title: 'Price',
          type: 'string',
          initialValue: '$1,200 plus shipping',
        },
      ],
    },
    {
      name: 'premiumCarePackage',
      title: 'Premium Care Package',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'PREMIUM CARE PACKAGE',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            '20.4 Men Shampoo & Conditioner (1)',
            '18 oz. Dove Men + Care Face and Body Wash (1)',
            '5PRO Natural Whey Protein - 2lb (1)',
            'Protein Shaker Bottle (1)',
            'Strike Force Energy - 10 Packets (3)',
            "Lenny & Larry's Protein Cookies (3)",
            'Kodiak Protein Cups (2)',
            '5-hour Energy (2)',
            'Four Points Tactical Protein bars (3)',
            'One Nation Coffee 12oz (2)',
            'Mug (1)',
            'Eat Your Coffee (2)',
            "Nonni's Almond Cioccolati Biscotti (3)",
            'Biscottio Brothers Almond Biscotti (3)',
            'Men/Women Care Deodorant (2)',
            'Bottle Of Lotion (1)',
            '5 AXE Razor Pack (1)',
            'KickAss Original Jerky 3oz (1)',
            'KickAss Teriyaki Snack Sticks (1)',
            'Skittles (1)',
          ],
        },
        {
          name: 'price',
          title: 'Price',
          type: 'string',
          initialValue: '$1,700 plus shipping',
        },
      ],
    },
  ],
}
