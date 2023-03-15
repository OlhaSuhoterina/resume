// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: `Dmytro`,
    lastname: `Ivanov`,
  },
  position: `Junior Fullstack JS Developer`,
  salary: `600$ в місяц`,
  address: `1002, Ukraine, Kharkov, st. Yaroslava Mudrogo, 111`,
}

var footer = {
  social: {
    email: {
      text: `dmytro@mail.com`,
      href: `mailto:dmytro@mail.com`,
    },
    phone: {
      text: `+380670000123`,
      href: `tel:+380670000123`,
    },
    Linkedim: {
      text: `LinkedIn`,
      href: `https://www.linkedin.com/in/dmytro-test`,
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: `Resume / Summary`,
    },
    header,

    main: {
      summary: {
        title: `Summary`,
        text: `Open-minded for new technologies, with 1 years of
            experience in development. Whenever I start to
            work on a new project I learn the domain and try
            to understand the idea of the project. Good team
            player, every colleague is a friend to me.`,
      },
      experience: {
        title: `Other experience`,
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc. `,
      },
    },
    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: `Resume / Skills`,
    },
    header,

    main: {
      skills: [
        {
          name: `HTML`,
          point: 10,
          isTop: true,
        },
        {
          name: `Terminal`,
          point: 10,
          isTop: true,
        },
        {
          name: `VS CODE`,
          point: 9,
          isTop: true,
        },
        {
          name: `Handlebars`,
          point: 7,
        },
        {
          name: `Git`,
          point: 5,
          isTop: false,
        },
        {
          name: `JS`,
          point: 0,
        },
        {
          name: `PHP`,
          point: null,
        },
      ],
      hobbies: [
        {
          name: `Sports running`,
          isMain: true,
        },
        {
          name: `Reading books`,
          isMain: true,
        },
        {
          name: `Online-courses`,
          isMain: false,
        },
      ],
    },
    footer,
  })
})

// ================================================================

/// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: `Resume / Education`,
    },
    header,
    main: {
      education: [
        {
          name: `Schools 1`,
          isEnd: true,
        },
        {
          name: `Kharkov Financial College`,
          isEnd: true,
        },
        {
          name: `Kharkiv National Automobile and Highway University`,
          isEnd: true,
        },
        {
          name: `It-Brains`,
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: `School certificate`,
          id: 1111111,
        },
        {
          name: `College certificate`,
          id: 222222,
        },
        {
          name: `Specialist diploma`,
          id: 33333,
        },
      ],
    },

    footer,
  })
})
// ================================================================

/// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: `big`,
    page: {
      title: `Resume / Work`,
    },
    header,
    main: {
      works: [
        {
          position: `FrontEnd-разработчик`,
          company: {
            name: `Dev-Pro`,
            url: null,
          },
          duration: {
            from: `01.01.2021`,
            to: `01.01.2022`,
          },
          prodjectAmaunt: `3`,
          prodjects: [
            {
              name: `Resume`,
              url: `https://resume.pro/`,
              about: `The quality of teaching is the key element of the quality of education`,
              stacks: [
                {
                  name: `HTML/CSS`,
                },
                {
                  name: `Node.js`,
                },
                {
                  name: `React.js`,
                },
              ],
              awards: [
                {
                  name: `The course presents different views on improving the quality of teaching`,
                },
                {
                  name: `Updating syllabuses, control for changes, and leadership at the university`,
                },
              ],
              stackAmount: 8,
              awardAmount: 5,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: `person`,
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },

                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
