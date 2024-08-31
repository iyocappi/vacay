// schemas/profile.js
export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'about',
      type: 'text',
      title: 'About',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'details',
      type: 'object',
      title: 'Details',
      fields: [
        {name: 'age', type: 'number', title: 'Age'},
        {name: 'mos', type: 'string', title: 'MOS Code'},
        {name: 'dob', type: 'date', title: 'Date of Birth'},
        {name: 'rank', type: 'string', title: 'Rank'},
        {name: 'eyeColor', type: 'string', title: 'Eye Color'},
        {name: 'hairColor', type: 'string', title: 'Hair Color'},
        {name: 'height', type: 'string', title: 'Height'},
      ],
    },
  ],
}
