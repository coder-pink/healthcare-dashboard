
export const anatomyLabels = [
  { label: 'Healthy Heart', color: '#5441D6', position: { top: '20%', left: '60%' } },
  { label: 'Healthy Leg', color: '#00C3FF', position: { top: '70%', left: '35%' } },
];

export const healthStatusCards = [
  {
    title: 'Lungs',
    icon: '🩺',
    date: '26 Okt 2021',
    color: '#FF5C5C',
  },
  {
    title: 'Teeth',
    icon: '🦷',
    date: '26 Okt 2021',
    color: '#5CD68A',
  },
  {
    title: 'Bone',
    icon: '🦴',
    date: '26 Okt 2021',
    color: '#FFA54D',
  },
];


export const weeklyActivity = [
  { day: 'Mon', bars: [30, 60, 40] },
  { day: 'Tues', bars: [70, 40, 60] },
  { day: 'Wed', bars: [50, 20, 40] },
  { day: 'Thurs', bars: [60, 30, 20] },
  { day: 'Fri', bars: [80, 70, 40] },
  { day: 'Sat', bars: [40, 20, 10] },
  { day: 'Sun', bars: [30, 50, 20] },
];


export const calendarData = {
  week: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  dates: [25, 26, 27, 28, 29, 30, 31],
  appointments: {
    26: [{ time: '09:00', type: 'Dentist', doctor: 'Dr. Cameron Williamson', from: '09:00', to: '11:00' }],
    30: [
      { time: '12:00', from: '12:00', to: '13:00' },
      { time: '14:00', from: '14:00', to: '15:00' },
    ],
    31: [{ time: '09:00', from: '09:00', to: '10:00' }],
    28: [{ time: '11:00', from: '11:00', to: '12:00', type: 'Physiotherapy Appointment', doctor: 'Dr. Kevin Djones' }],
  },
};


export const scheduleData = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { title: 'Neurologist', time: '16:00 PM', icon: '🧑' },
    ],
  },
];