//mock data for tests
const mockData = {
  selectAll: false,
  showAlert: false,
  count: 1,
  availableFiles: 1,
  columnNames: ['', 'Cars', 'Trucks', 'Planes', 'Boats'],
  files: [
    {
      id: 0,
      name: 'prince',
      device: 'apple',
      path: '/documents/folder',
      status: 'Available',
      selected: true,
    },
    {
      id: 1,
      name: 'king',
      device: 'windows',
      path: '/library/folder',
      status: 'Scheduled',
      selected: false,
    },
    {
      id: 2,
      name: 'queen',
      device: 'linux',
      path: '/desktop/folder',
      status: 'Scheduled',
      selected: false,
    },
  ],
  dispatch: () => {},
}

export default mockData
