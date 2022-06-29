type PatientData = {
    name: string,
    avatar: string,
    age: number,
    sex: string,
    weight: number,
}

const Patients = [
    {
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      sex: 'male',
      weight: 160,
      age: 33,
    },
    {
      name: 'Sarah Parker',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        sex: 'female',
        weight: 130,
        age: 33,
    },
    {
      name: 'Barry Allen',
      avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
      sex: 'undisclosed',
      weight: 300,
      age: 33,
    },
    {
      name: 'Terry Andrews',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      sex: 'non-binary',
      weight: 75,
      age: 33,
    },
    {
      name: 'Andy Vitale',
      avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
      sex: 'male',
      weight: 220,
      age: 33,
    },
    {
      name: 'Katy Friedson',
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
        sex: 'female',
        weight: 181,
        age: 33,
    },
];
  
export default Patients;