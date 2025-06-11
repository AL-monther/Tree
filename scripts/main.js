const root = document.documentElement;
    
    function toggleTheme() {
      const currentTheme = root.getAttribute('data-theme');
      if (currentTheme === 'light') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      root.setAttribute('data-theme', 'light');
    }
    const chart_config = {
      chart: {
        container: "#tree-simple",
        connectors: {
          type: "curve",
          style: {
            "stroke": "var(--connector-color)",
            "stroke-width": 2
          }
        },
        node: {
          collapsable: true,
          HTMLclass: "node"
        },
        animation: {
          nodeAnimation: "linear",
          nodeSpeed: 500,
          connectorsAnimation: "linear",
          connectorsSpeed: 500,
        }
      },
      nodeStructure: {
    image: "images/Rebdii-removebg-preview.png",
  text: {
    name: "",
    title: "  " },
    connector: { type: "none" },
    HTMLclass: "node no-toggle",
    
  children: [
    {
        text: { name: "عبدالرحمن" },
        searchName: "عبدالرحمن",
        children: [
          {
            text: { name: "محمد" },
            searchName: "محمد عبدالرحمن",
            HTMLclass: "gen-2",
            collapsed: true,
            children: [
              {
                text: { name: "إبراهيم" },
                searchName: "إبراهيم محمد عبدالرحمن",
                HTMLclass: "gen-3",
                collapsed: true,
                children: [
                  {
                    text: { name: "عبدالعزيز" },
                    searchName: "عبدالعزيز إبراهيم محمد",
                    HTMLclass: "gen-4",
                    collapsed: true,
                    children: [
                      {
                        text: { name: "محمد" },
                        searchName: "محمد عبدالعزيز إبراهيم",
                        collapsed: true,
                        children: [
                          {
                            text: { name: "عبدالله" },
                            searchName: "عبدالله محمد عبدالعزيز",
                            collapsed: true,
                            children: [
                              {
                                text: { name: "عبدالعزيز" },
                                searchName: "عبدالعزيز عبدالله محمد",
                                HTMLclass: "gen-5",
                                collapsed: true,
                                children: [ 
                                  { 
                                    text: { name: "تركي" },
                                    searchName: "تركي عبدالعزيز عبدالله" 
                                  } 
                                ]
                              },
                              {
                                text: { name: "أحمد" },
                                searchName: "أحمد عبدالله محمد",
                                HTMLclass: "gen-5",
                                collapsed: true,
                                children: [
                                  { text: { name: "وليد" }, searchName: "وليد أحمد عبدالله" },
                                  { text: { name: "طلال" }, searchName: "طلال أحمد عبدالله" },
                                  { text: { name: "فارس" }, searchName: "فارس أحمد عبدالله" },
                                  { text: { name: "بدر" }, searchName: "بدر أحمد عبدالله" }
                                ]
                              },
                              { text: { name: "سلطان" } },
                              { text: { name: "نايف" } },
                              { text: { name: "فيصل" } }
                            ]
                          },
                          {
                            text: { name: "إبراهيم" },
                            searchName: "إبراهيم محمد عبدالعزيز",
                            collapsed: true,
                            children: [
                              {
                                text: { name: "محمد" },
                                searchName: "محمد إبراهيم محمد",
                                HTMLclass: "gen-5",
                                children: [ { text: { name: "ليث" }, searchName: "ليث محمد إبراهيم" } ]
                              },
                              { text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز إبراهيم محمد" },
                              {
                                text: { name: "معاذ" },
                                searchName: "معاذ إبراهيم محمد",
                                collapsed: true,
                                HTMLclass: "gen-5",
                                children: [ 
                                  { text: { name: "مهند" }, searchName: "مهند معاذ إبراهيم" } ,
                                  { text: { name: "إبراهيم" }, searchName: "إبراهيم معاذ إبراهيم" } 




                                ]
                              },
                              { text: { name: "أنس" }, searchName: "أنس إبراهيم محمد" },
                              { text: { name: "عبدالملك" }, searchName: "عبدالملك إبراهيم محمد" },
                              { text: { name: "ضاري" }, searchName: "ضاري إبراهيم محمد" }
                            ]
                          },
                          {
                            text: { name: "علي" },
                            searchName: "علي محمد عبدالعزيز",
                            collapsed: true,
                            children: [
                              { text: { name: "محمد" }, searchName: "محمد علي محمد" },
                              { text: { name: "يوسف" }, searchName: "يوسف علي محمد" },
                              { text: { name: "جابر" }, searchName: "جابر علي محمد" },
                              { text: { name: "عيسى" }, searchName: "عيسى علي محمد" }
                            ]
                          }
                        ]
                      },
                      {
                        text: { name: "حمد" },
                        searchName: "حمد عبدالعزيز إبراهيم",
                        collapsed: true,
                        children: [
                          {
                            text: { name: "عبدالعزيز" },
                            searchName: "عبدالعزيز حمد عبدالعزيز",
                            HTMLclass: "gen-4",
                            collapsed: true,
                            children: [
                          { text: { name: "حمد" } ,
                         children: [

                          { text: { name: "فيصل" }, } ,

                        ]

                        },
                          { text: { name: "محمد" } },
                          { text: { name: "إبراهيم" } },
                          { text: { name: "فيصل" } }
                            ]
                          },

                        ]
                      },
                      {
                        text: { name: "سليمان" },
                        searchName: "سليمان عبدالعزيز إبراهيم",
                        collapsed: true,
                        children: [
                          {
                            text: { name: "عبدالعزيز" },
                            searchName: "عبدالعزيز سليمان عبدالعزيز",
                            collapsed: true,
                            children: [
                              { text: { name: "أحمد" } },
                              {
                                text: { name: "فهد" },
                                collapsed: true,
                                children: [ { text: { name: "ريان" } }, { text: { name: "عبدالعزيز" } }]
                              },
                              { text: { name: "عمر" } },
                              { text: { name: "سليمان" } },
                              { text: { name: "راكان" } }
                            ]
                          },
                          {
                            text: { name: "محمد" },
                            searchName: "محمد سليمان عبدالعزيز",
                            collapsed: true,
                            children: [
                              { text: { name: "سليمان" },
                             children: [
                              { text: { name: "عبدالله" },searchName: "عبدالله سليمان محمد" },]
                            },
                              { text: { name: "يزيد" }, searchName: "يزيد محمد سليمان" },
                              { text: { name: "عبدالملك" }, searchName: "عبدالملك محمد سليمان" },
                              { text: { name: "عبدالله" }, searchName: "عبدالله محمد سليمان" },
                              { text: { name: "سلطان" }, searchName: "سلطان محمد سليمان" }
                            ]
                          },
                          {
                            text: { name: "ربدي" },
                            searchName: "ربدي سليمان عبدالعزيز",
                            collapsed: true,
                            children: [
                              { text: { name: "معاذ" } },
                              { text: { name: "الوليد" } },
                              { text: { name: "محمد" } }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  { text: { name: "حمد" }, 
                  searchName: "حمد إبراهيم محمد",
                  collapsed: true,
                  children: [
                  {
      text: { name: "سليمان" },
      searchName: "سليمان حمد إبراهيم",
      HTMLclass: "gen-3",
      children: [
        {
          text: { name: "عبدالله" },
          searchName: "عبدالله سليمان حمد",
          HTMLclass: "gen-4",
          children: [
            {
              text: { name: "محمد" },
              searchName: "محمد عبدالله سليمان",
              children: [
                {
                  text: { name: "ماجد" },
                  searchName: "ماجد محمد عبدالله",
                  children: [
                    { text: { name: "فارس" }, searchName: "فارس ماجد محمد" },
                    { text: { name: "محمد" }, searchName: "محمد ماجد محمد" }
                  ]
                },
                { text: { name: "مساعد" }, searchName: "مساعد محمد عبدالله" },
                { text: { name: "بدر" }, searchName: "بدر محمد عبدالله" },
                { text: { name: "عماد" }, searchName: "عماد محمد عبدالله" }
              ]
            },
            {
              text: { name: "خالد" },
              searchName: "خالد عبدالله سليمان",
              children: [
                { text: { name: "وليد" },
                  searchName: "وليد خالد عبدالله",
                  children: [
                    { text: { name: "طلال" }, searchName: "طلال وليد خالد" }
                  ]
                },
                { text: { name: "سعد" },
                  searchName: "سعد خالد عبدالله",
                  children: [
                    { text: { name: "خالد" }, searchName: "خالد سعد خالد" }
                  ]
                },
                { text: { name: "سليمان" }, searchName: "سليمان خالد عبدالله",
                  children: [  { text: { name: "فارس" }, searchName: "فارس سليمان خالد" },]
                },
                { text: { name: "ناصر" }, searchName: "ناصر خالد عبدالله",
                  children: [  { text: { name: "خالد" }, searchName: "خالد ناصر خالد" },]
                },
                { text: { name: "حمد" }, searchName: "حمد خالد عبدالله",
                  children: [  { text: { name: "خالد" }, searchName: "خالد حمد خالد" },]
                }
              ]
            },
            {
              text: { name: "أحمد" },
              searchName: "أحمد عبدالله سليمان",
              children: [
                { text: { name: "خالد" }, searchName: "خالد أحمد عبدالله" },
                { text: { name: "زياد" }, searchName: "زياد أحمد عبدالله" },
                { text: { name: "يونس" }, searchName: "يونس أحمد عبدالله" },
                { text: { name: "مهند" }, searchName: "مهند أحمد عبدالله" }
              ]
            },
            { text: { name: "يونس" }, searchName: "يونس عبدالله سليمان" },
            { text: { name: "جابر" },
              searchName: "جابر عبدالله سليمان",
              children: [
                { text: { name: "عبدالله" }, searchName: "عبدالله جابر عبدالله" },
                { text: { name: "تركي" }, searchName: "تركي جابر عبدالله" }
              ]
            },
            { text: { name: "سليمان" }, searchName: "سليمان عبدالله سليمان" },
            { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن عبدالله سليمان" }
          ]
        }
      ]
    }
              ]
            
            },
                  { text: { name: "علي" }, 
                  searchName: "علي إبراهيم محمد",
                  children: [
    {
      text: { name: "عبدالله" },
      searchName: "عبدالله علي إبراهيم",
      HTMLclass: "gen-3",
      children: [
        {
          text: { name: "إبراهيم" },
          searchName: "إبراهيم عبدالله علي",
          children: [
            {
              text: { name: "محمد" },
              searchName: "محمد إبراهيم عبدالله",
              children: [
                { text: { name: "إبراهيم" }, searchName: "إبراهيم محمد إبراهيم" }
              ]
            }
          ]
        },
        {
          text: { name: "محمد" },
          searchName: "محمد عبدالله علي",
          children: [
            { text: { name: "عبدالله" }, searchName: "عبدالله محمد عبدالله",
              children: [   { text: { name: "طارق" }, searchName: "طارق عبدالله محمد" },
                 { text: { name: "محمد" }, searchName: "محمد عبدالله محمد" },
              ]
            },
            { text: { name: "فيصل" }, searchName: "فيصل محمد عبدالله" },
            { text: { name: "مازن" }, searchName: "مازن محمد عبدالله" },
            { text: { name: "نواف" }, searchName: "نواف محمد عبدالله" },
            { text: { name: "فهد" }, searchName: "فهد محمد عبدالله" }
          ]
        },
        { text: { name: "علي" },
          children: [
            { text: { name: "عبدالله" }, searchName: "عبدالله علي عبدالله" },
            { text: { name: "ماجد" }, searchName: "ماجد علي عبدالله" },
            { text: { name: "يونس" }, searchName: "يونس علي عبدالله" }
          ]
        },
        { text: { name: "صالح" },
          children: [
            { text: { name: "عبدالله" }, searchName: "عبدالله صالح عبدالله" },
            { text: { name: "ريان" }, searchName: "ريان صالح عبدالله" }
          ]
        },
        { text: { name: "عبدالعزيز" }, children: [
          { text: { name: "عبدالله" }, searchName: "عبدالله عبدالعزيز عبدالله" },
          { text: { name: "فيصل" }, searchName: "فيصل عبدالعزيز عبدالله" }
        ]},
        { text: { name: "بدر" }, children: [
          { text: { name: "عاصم" }, searchName: "عاصم بدر عبدالله" },
          { text: { name: "عبدالله" }, searchName: "عبدالله بدر عبدالله" },
           { text: { name: "محمد" }, searchName: "محمد بدر عبدالله" }
        ]}
      ]
    }
  ]
                }, 
                  { text: { name: "صالح" }, 
                  searchName: "صالح إبراهيم محمد",
                  children: [
    {
      text: { name: "عبدالله" },
      searchName: "عبدالله صالح إبراهيم",
      children: [
        {
      text: { name: "صالح" },
      searchName: "صالح عبدالله صالح",
      HTMLclass: "gen-3",
      children: [
        { text: { name: "محمد" },
          children: [
            { text: { name: "سفيان" }, searchName: "سفيان محمد صالح" },
            { text: { name: "سلمان" }, searchName: "سلمان محمد صالح" },
            { text: { name: "عبدالله" }, searchName: "عبدالله محمد صالح" },
            { text: { name: "عبدالملك" }, searchName: "عبدالملك محمد صالح" }
          ] },
        { text: { name: "إبراهيم" },
          children: [
            { text: { name: "عبدالله" },
        children: [
            { text: { name: "عدي" }, searchName: "عدي عبدالله إبراهيم" },
        ]},
            { text: { name: "صالح" }, searchName: "صالح إبراهيم صالح" },
            { text: { name: "باسل" }, searchName: "باسل إبراهيم صالح" },
            { text: { name: "ربدي" }, searchName: "ربدي إبراهيم صالح" },
            { text: { name: "طلال" }, searchName: "طلال إبراهيم صالح" },
            { text: { name: "سليمان" }, searchName: "سليمان إبراهيم صالح" },
            { text: { name: "عزام" }, searchName: "عزام إبراهيم صالح" }
          ] },
        { text: { name: "عبدالله" },
        children: [
            { text: { name: "يزيد" } },
            { text: { name: "صالح" } },
            { text: { name: "نواف" } },
            { text: { name: "الياس" } },
            { text: { name: "محمد" } },
          ] ,
      
      
        },
       
        { text: { name: "حمد" },
        children: [
            { text: { name: "فهد" }, searchName: "فهد حمد صالح" },
            { text: { name: "فيصل" }, searchName: "فيصل حمد صالح" },
            { text: { name: "صالح" }, searchName: "صالح حمد صالح" },
             { text: { name: "ماجد" }, searchName: "ماجد حمد صالح" }
          ] ,
      
        },
        { text: { name: "علي" },
          children: [
            { text: { name: "وافي" }, searchName: "وافي علي صالح" }
          ] }
      ]
    }
        
      ]
    },

  ] 
                },
                  { text: { name: "محمد" },
                   searchName: "محمد إبراهيم محمد",
                   HTMLclass: "gen-4",
                  
  children: [
    {
      text: { name: "حمد" },
      searchName: "حمد محمد إبراهيم",
      children: [
        {
          text: { name: "عبدالله" },
          searchName: "عبدالله حمد محمد",
          children: [
            {
              text: { name: "رامي" },
              searchName: "رامي عبدالله حمد",
              children: [
                { text: { name: "ضاري" } },
                { text: { name: "عبدالله" } }
              ]
            },
            {
              text: { name: "راكان" },
              searchName: "راكان عبدالله حمد",
              children: [
                { text: { name: "عبدالله" } }
              ]
            },
            { text: { name: "ريان" }, children: [
                { text: { name: "تركي" } }
              ] },
            { text: { name: "محمد" } }
          ]
        },
        {
          text: { name: "فهد" },
          searchName: "فهد حمد محمد",
          children: [
            { text: { name: "محمد" } },
            { text: { name: "أحمد" } },
            { text: { name: "عبدالعزيز" } }
          ]
        },
        {
          text: { name: "سليمان" },
          searchName: "سليمان حمد محمد",
          children: [
            { text: { name: "حمد" } },
            { text: { name: "عبدالعزيز" } },
            { text: { name: "محمد" } },
            { text: { name: "سعود" } }
          ]
        },
        {
          text: { name: "صالح" },
          searchName: "صالح حمد محمد",
          children: [
            { text: { name: "فيصل" } }
          ]
        },
        { text: { name: "خليل" } }
        ]
         },
        {
         text: { name: "إبراهيم" },
         searchName: "إبراهيم محمد إبراهيم",
          children: [
         {
          text: { name: "فهد" },
          searchName: "فهد إبراهيم محمد",
          children: [
            { text: { name: "محمد" } }
          ]
        },
        {
          text: { name: "عبدالعزيز" },
          searchName: "عبدالعزيز إبراهيم محمد",
          children: [
            { text: { name: "طارق" } }
          ]
        },
        {
        text: { name: "صالح" },
        searchName: "صالح إبراهيم محمد",
        children: [
         { text: { name: "تركي" } },
         { text: { name: "إبراهيم" } }
        ]

        },
        
        { text: { name: "عبدالله" }, 
        searchName: "عبدالله إبراهيم محمد",
        children: [
        {  text: { name: "خالد" }, },
        {  text: { name: "سعود" }, }
       ]
      
        },
        { text: { name: "عمر" } },
        { text: { name: "عبدالرحمن" },
        searchName: "عبدالرحمن إبراهيم محمد",
        children: [
        { 
          text: { name: "إبراهيم" },
       }]
      
      
      
        },
        { text: { name: "خالد" },
        searchName: "خالد إبراهيم محمد",
        children: [
        { text: { name: "الوليد" },
          
      
        }] 
      },
      { text: { name: "أحمد" }, children: [  { text: { name: "إبراهيم" } },]  },
       { text: { name: "سليمان" }, children: [  { text: { name: "بدر" } },]  },
        { text: { name: "محمد" } },
        { text: { name: "فارس" } },
        { text: { name: "ربدي" } },
        { text: { name: "عبدالسلام" } },
        { text: { name: "بسام" } },
        ]
     },
    { text: { name: "عبدالله" },
     
     children: [
      {
      text: { name: "إبراهيم" },
      children: [
        { text: { name: "محمد" } },
        { text: { name: "عبدالله" } },
        { text: { name: "أسامة" } },
        { text: { name: "فراس" } }
      ]
      },
      {
      text: { name: "صالح" },
      children: [
        { text: { name: "راكان" } },
        { text: { name: "رائد" } },
        { text: { name: "عبدالله" } }
      ]
      },
      {
      text: { name: "أحمد" },
      children: [
        { text: { name: "عبدالله" } },
        { text: { name: "سلمان" } },
        { text: { name: "محمد" } },
        { text: { name: "جهاد" } }
      ]
      },
     {
      text: { name: "عبدالعزيز" },
      children: [
        { text: { name: "عبدالله" } },
        { text: { name: "عبدالرحمن" } },
      ]
      },
     {
      text: { name: "محمد" },
      children: [
        { text: { name: "طلال" }, searchName: "طلال محمد عبدالله" },
        { text: { name: "عبدالله" }, searchName: "عبدالله محمد عبدالله" }
      ]
      },
      {
      text: { name: "علي" },
      searchName: "علي عبدالله عبدالعزيز", 
      children: [
        { text: { name: "ضاري" }, searchName: "ضاري علي عبدالله" },
        { text: { name: "جسار" }, searchName: "جسار علي عبدالله" },
        { text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز علي عبدالله" }
      ]
      },
      {
      text: { name: "عمر" }
      },
      {
      text: { name: "ريان" }
      }
      ]

    
    },
    { text: { name: "صالح" },
    searchName: "صالح محمد إبراهيم",
    children: [
        { text: { name: "سامي" },
        searchName: "سامي صالح محمد",
        children: [
        { text: { name: "محمد" }, searchName: "محمد سامي صالح" },
        { text: { name: "مازن" }, searchName: "مازن سامي صالح" },
        { text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز سامي صالح" },
      ]
        },
        { text: { name: "ربدي" },
        searchName: "ربدي صالح محمد",
        children: [
        { text: { name: "سلطان" }, searchName: "سلطان ربدي صالح" },
      ]
        },
        { text: { name: "إبراهيم" },
        searchName: "إبراهيم صالح محمد", 
        children: [
        { text: { name: "ثامر" }, searchName: "ثامر إبراهيم صالح" },
        { text: { name: "ناصر" }, searchName: "ناصر إبراهيم صالح" },
      ]},
        { text: { name: "محمد" }, searchName: "محمد صالح محمد" },
        { text: { name: "منصور" }, searchName: "منصور صالح محمد",
         children: [
        { text: { name: "صالح" }, searchName: "صالح منصور صالح" },]
      },

      ]
    },
    { text: { name: "علي" },
    searchName: "علي محمد إبراهيم", 
    children: [
        { text: { name: "محمد" }, searchName: "محمد علي محمد" }
      ]
    },
    { text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز محمد إبراهيم" },
    { text: { name: "ناصر" }, searchName: "ناصر محمد إبراهيم" },
   
    

  ]


                  }
                ]
              },
              { text: { name: "عبدالرحمن" },//  العبدالرحمن
  children: [
    {
      text: { name: "سليمان" },
      searchName: "سليمان عبدالرحمن محمد",
      children: [
      {
      text: { name: "محمد" },
  children: [
    {
      // الجيل الرابع
      text: { name: "سليمان" },
      children: [
      {
          // الجيل الخامس
          text: { name: "فهد" },
          searchName: "فهد سليمان محمد",
          children: [
            // الجيل السادس
            { text: { name: "ثامر" }, searchName: "ثامر فهد سليمان" },
            { text: { name: "حسام" }, searchName: "حسام فهد سليمان" },
            { text: { name: "خليل" }, searchName: "خليل فهد سليمان" }
          ]
        },
        {
          // الجيل الخامس
          text: { name: "عبدالعزيز" },
          searchName: "عبدالعزيز سليمان محمد"
        },
       
        {
          // الجيل الخامس
          text: { name: "خالد" },
          searchName: "خالد سليمان محمد",
          children: [
            // الجيل السادس
            { text: { name: "عبدالله" }, searchName: "عبدالله خالد سليمان" },
            {
              text: { name: "بندر" },
              searchName: "بندر خالد سليمان",
              children: [
                // الجيل السابع
                { text: { name: "وافي" }, searchName: "وافي بندر خالد" },
                { text: { name: "نهار" }, searchName: "نهار بندر خالد" }
              ]
            },
            { text: { name: "سليمان" }, searchName: "سليمان خالد سليمان" },
            { text: { name: "محمد" }, searchName: "محمد خالد سليمان" },
            { text: { name: "يزيد" }, searchName: "يزيد خالد سليمان" }
          ]
        },
        {
          // الجيل الخامس
          text: { name: "أحمد" },
          children: [
            // الجيل السادس
            { text: { name: "سليمان" } },
            { text: { name: "مروان" } },
            { text: { name: "محمد" } },
            { text: { name: "مؤيد" } },
            { text: { name: "تميم" } }
          ]
        },
        {
          // الجيل الخامس
          text: { name: "إبراهيم" },
          children: [
            // الجيل السادس
            { text: { name: "سليمان" } },
            { text: { name: "عبدالرحمن" } },
            { text: { name: "عمر" } }
          ]
        }
      ]
    },
    {
      // الجيل الرابع
      text: { name: "عبدالرحمن" },
      children: [
        // الجيل الخامس
        { text: { name: "عبدالله" }, children: [
          // الجيل السادس
          { text: { name: "عبدالرحمن" } },
          { text: { name: "محمد" } }
        ] },
        { text: { name: "عبدالمجيد" }, children: [
          // الجيل السادس
          { text: { name: "مشعل" } }
        ] },
        { text: { name: "منصور" }, children: [
          // الجيل السادس
          { text: { name: "نادر" } },
          { text: { name: "أديب" } }
        ] },
        { text: { name: "سلطان" } }
      ]
    },
    {
      // الجيل الرابع
      text: { name: "إبراهيم" },
      children: [
        // الجيل الخامس
        { text: { name: "فهد" }, children: [
          // الجيل السادس
          { text: { name: "محمد" } },
          { text: { name: "عبدالمجيد" } }
        ] },
        { text: { name: "عبدالله" }, children: [
          // الجيل السادس
          { text: { name: "فيصل" } },
          { text: { name: "ضاري" } }
        ] },
        { text: { name: "ماجد" }, children: [
          // الجيل السادس
          { text: { name: "نواف" } },
          { text: { name: "إبراهيم" } },
          { text: { name: "مشعل" } },
          { text: { name: "عبدالعزيز" } },
          { text: { name: "عبدالكريم" } }
        ] }
      ]
    },
    {
      // الجيل الرابع
      text: { name: "عبدالله" },
      searchName: "عبدالله محمد سليمان",
      children: [
        { text: { name: "ياسر" }, searchName: "ياسر عبدالله محمد" },
        { text: { name: "يوسف" },
        searchName: "يوسف عبدالله محمد",
        children:[
          { text: { name: "عبدالله" }, searchName: "عبدالله يوسف عبدالله" },
          { text: { name: "أصيل" }, searchName: "أصيل يوسف عبدالله" }
        ]
        }
      ]
    },
    { text: { name: "فهد" },
    children: [
    { text: { name: "منصور" } },
    { text: { name: "بدر" },
    children:[
    { text: { name: "فهد" } },

    ]
  
    },
    { text: { name: "فيصل" } },
    { text: { name: "محمد" } },



    ]
  
  
  
    },
    {
      // الجيل الرابع
      text: { name: "صالح" },
      children: [
        // الجيل الخامس
        { text: { name: "عبدالله" }, children: [
          // الجيل السادس
          { text: { name: "صالح" } },
          { text: { name: "عبدالعزيز" } }
        ] },
        { text: { name: "محمد" }, children: [
          // الجيل السادس
          { text: { name: "صالح" } }
        ] }
      ]
    },
    {
      // الجيل الرابع
      text: { name: "علي" },
      children: [
        // الجيل الخامس
        { text: { name: "محمد" } },
        { text: { name: "عبدالله" } },
        { text: { name: "ربدي" } }
      ]
    },
// الجيل الرابع
  ]


    },
    


      ]
    },
    {
text: { name: "صالح" }, // الجيل الثاني
searchName: "صالح عبدالرحمن",
children: [
  {
    text: { name: "عبدالله" }, // الجيل الثالث
    searchName: "عبدالله صالح عبدالرحمن"
  },
  {
    text: { name: "عبدالرحمن" }, // الجيل الثالث
    searchName: "عبدالرحمن صالح عبدالرحمن",
    children: [
      {
        text: { name: "صالح" }, // الجيل الرابع
        searchName: "صالح عبدالرحمن صالح",
        children: [
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد صالح عبدالرحمن"
          }
        ]
      },
      {
        text: { name: "عبدالله" }, // الجيل الرابع
    searchName: "عبدالله عبدالرحمن صالح",
    children: [
      {
        text: { name: "عبدالرحمن" }, // الجيل الخامس
        searchName: "عبدالرحمن عبدالله عبدالرحمن"
      }
    ]
      },
      {
        text: { name: "محمد" }, // الجيل الرابع
    searchName: "محمد عبدالرحمن صالح",
    children: [
      {
        text: { name: "ثامر" }, // الجيل الخامس
        searchName: "ثامر محمد عبدالرحمن"
      },
      {
        text: { name: "معاذ" }, // الجيل الخامس
        searchName: "معاذ محمد عبدالرحمن"
      },
      {
        text: { name: "سلمان" }, // الجيل الخامس
        searchName: "سلمان محمد عبدالرحمن"
      }
    ]
      },
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد عبدالرحمن صالح",
        children: [
          {
            text: { name: "عبدالله" }, // الجيل الخامس
            searchName: "عبدالله فهد عبدالرحمن"
          },
          {
            text: { name: "عبدالرحمن" }, // الجيل الخامس
            searchName: "عبدالرحمن فهد عبدالرحمن"
          }
        ]
      }
    ]
  }
]

    },
    {
      text: { name: "عبدالعزيز" }, // الجيل الثاني
searchName: "عبدالعزيز عبدالرحمن",
children: [
  {
    text: { name: "محمد" }, // الجيل الثالث
    searchName: "محمد عبدالعزيز عبدالرحمن",
    children: [
      {
        text: { name: "صالح" }, // الجيل الرابع
        searchName: "صالح محمد عبدالعزيز",
        children: [
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد صالح محمد",
            children: [
              {
                text: { name: "مشاري" }, // الجيل السادس
                searchName: "مشاري محمد صالح"
              },
              {
                text: { name: "مشعل" }, // الجيل السادس
                searchName: "مشعل محمد صالح"
              }
            ]
          },
          {
            text: { name: "ريادي" }, // الجيل الخامس
            searchName: "ريادي صالح محمد"
          },
          {
            text: { name: "عبدالناصر" }, // الجيل الخامس
            searchName: "عبدالناصر صالح محمد",
            children: [
              {
                text: { name: "فهد" }, // الجيل السادس
                searchName: "فهد عبدالناصر صالح"
              }
            ]
          },
          {
            text: { name: "سليمان" }, // الجيل الخامس
            searchName: "سليمان صالح محمد"
          }
        ]
      },
      {
        text: { name: "إبراهيم" }, // الجيل الرابع
        searchName: "إبراهيم محمد عبدالعزيز",
        children: [
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد إبراهيم محمد",
            children: [
              {
                text: { name: "إبراهيم" }, // الجيل السادس
                searchName: "إبراهيم محمد إبراهيم"
              }
            ]
          },
          {
            text: { name: "خالد" }, // الجيل الخامس
            searchName: "خالد إبراهيم محمد",
            children: [
              {
                text: { name: "الوليد" }, // الجيل السادس
                searchName: "الوليد خالد إبراهيم"
              },
              {
                text: { name: "إبراهيم" }, // الجيل السادس
                searchName: "إبراهيم خالد إبراهيم"
              }
            ]
          },
          {
            text: { name: "وليد" }, // الجيل الخامس
            searchName: "وليد إبراهيم محمد"
          },
          {
            text: { name: "علي" }, // الجيل الخامس
            searchName: "علي إبراهيم محمد"
          },
          {
            text: { name: "عبدالرحمن" }, // الجيل الخامس
            searchName: "عبدالرحمن إبراهيم محمد"
          }
        ]
      },
      {
        text: { name: "علي" }, // الجيل الرابع
        searchName: "علي محمد عبدالعزيز"
      },
      {
        text: { name: "عبدالعزيز" }, // الجيل الرابع
        searchName: "عبدالعزيز محمد عبدالعزيز",
        children: [
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد عبدالعزيز محمد"
          }
        ]
      },
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد محمد عبدالعزيز",
        children: [
          {
            text: { name: "سلمان" }, // الجيل الخامس
            searchName: "سلمان فهد محمد"
          },
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد فهد محمد"
          }
        ]
      }
    ]
  },
  {
    text: { name: "عبدالله" }, // الجيل الثالث
    searchName: "عبدالله عبدالعزيز عبدالرحمن",
    children: [
      {
        text: { name: "سليمان" }, // الجيل الرابع
        searchName: "سليمان عبدالله عبدالعزيز",
        children: [
          {
            text: { name: "فهد" }, // الجيل الخامس
            searchName: "فهد سليمان عبدالله",
            children: [
              {
                text: { name: "ياسر" }, // الجيل السادس
                searchName: "ياسر فهد سليمان",
                children: [
                  {
                    text: { name: "فهد" }, // الجيل السابع
                    searchName: "فهد ياسر فهد"
                  },
                  {
                    text: { name: "ناصر" }, // الجيل السابع
                    searchName: "ناصر ياسر فهد"
                  },
                  {
                    text: { name: "غسان" }, // الجيل السابع
                    searchName: "غسان ياسر فهد"
                  }
                ]
              },
              {
                text: { name: "سليمان" }, // الجيل السادس
                searchName: "سليمان فهد سليمان",
                children: [
                  {
                    text: { name: "فهد" }, // الجيل السابع
                    searchName: "فهد سليمان فهد"
                  },
                  {
                    text: { name: "فراس" }, // الجيل السابع
                    searchName: "فراس سليمان فهد"
                  },
                  {
                    text: { name: "عبدالعزيز" }, // الجيل السابع
                    searchName: "عبدالعزيز سليمان فهد"
                  }
                ]
              },
              {
                text: { name: "عبدالله" }, // الجيل السادس
                searchName: "عبدالله فهد سليمان"
              },
              {
                text: { name: "صالح" }, // الجيل السادس
                searchName: "صالح فهد سليمان"
              }
            ]
          },
          {
            text: { name: "أحمد" }, 
            searchName: "أحمد سليمان عبدالله",
            children: [ 
              
             {
                text: { name: "سليمان" },
                searchName: "سليمان أحمد سليمان"
              },
              {
                text: { name: "فيصل" }, // الجيل السادس
                searchName: "فيصل أحمد سليمان"
              },
              {
                text: { name: "إبراهيم" }, // الجيل السادس
                searchName: "إبراهيم أحمد سليمان"
              }
            ]
          },
          {
            text: { name: "خالد" }, // الجيل الخامس
            searchName: "خالد سليمان عبدالله",
            children: [
              {
                text: { name: "نواف" }, // الجيل السادس
                searchName: "نواف خالد سليمان"
              }
            ]
          },
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد سليمان عبدالله",
            children: [
              {
                text: { name: "سليمان" }, // الجيل السادس
                searchName: "سليمان محمد سليمان"
              }
            ]
          }
        ]
      },
      {
        text: { name: "إبراهيم" }, // الجيل الرابع
        searchName: "إبراهيم عبدالله عبدالعزيز",
        children: [
          {
            text: { name: "عبدالله" }, // الجيل الخامس
            searchName: "عبدالله إبراهيم عبدالله"
          },
          {
            text: { name: "عبدالرحمن" }, // الجيل الخامس
            searchName: "عبدالرحمن إبراهيم عبدالله"
          }
        ]
      },
      {
        text: { name: "صالح" }, // الجيل الرابع
        searchName: "صالح عبدالله عبدالعزيز",
        children: [
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد صالح عبدالله"
          }
        ]
      },
      {
        text: { name: "عبدالعزيز" }, // الجيل الرابع
        searchName: "عبدالعزيز عبدالله عبدالعزيز",
        children: [
          {
            text: { name: "ثامر" }, // الجيل الخامس
            searchName: "ثامر صالح عبدالله"
          },
          {
            text: { name: "عبدالله" }, // الجيل الخامس
            searchName: "عبدالله عبدالعزيز عبدالله",
            children: [
              {
                text: { name: "عبدالعزيز" }, // الجيل السادس
                searchName: "عبدالعزيز عبدالله عبدالعزيز"
              },
              {
                text: { name: "أحمد" }, // الجيل السادس
                searchName: "أحمد عبدالعزيز عبدالله"
              }
            ]
          },
          {
            text: { name: "محمد" }, // الجيل الخامس
            searchName: "محمد عبدالعزيز عبدالله"
          },
          {
            text: { name: "نايف" }, // الجيل الخامس
            searchName: "نايف عبدالعزيز عبدالله"
          }
        ]
      },
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد عبدالله عبدالعزيز",
        children: [
          {
            text: { name: "عبدالله" }, // الجيل السادس
            searchName: "عبدالله فهد عبدالله"
          },
          {
            text: { name: "يزيد" }, // الجيل السادس
            searchName: "يزيد فهد عبدالله"
          },
                    {
            text: { name: "أنس" }, // الجيل السادس
            searchName: "أنس فهد عبدالله"
          },
          {
            text: { name: "حسين" }, // الجيل السادس
            searchName: "حسين فهد عبدالله"
          }
        ]
      },
      {
        text: { name: "أحمد" }, // الجيل الرابع
        searchName: "أحمد عبدالله عبدالعزيز",
        children: [
          {
            text: { name: "عبدالله" }, // الجيل الخامس
            searchName: "عبدالله أحمد عبدالله",
           children: [
          {
            text: { name: "إبراهيم" }, // الجيل السادس
            searchName: "إبراهيم عبدالله أحمد"
          },
        ]
      },
      {
        text: { name: "عبدالعزيز" }, // الجيل الخامس
        searchName: "عبدالعزيز أحمد عبدالله"
      },
      {
        text: { name: "سليمان" }, // الجيل الخامس
        searchName: "سليمان أحمد عبدالله"
      },
      {
        text: { name: "سعود" }, // الجيل الخامس
            searchName: "سعود أحمد عبدالله"
          },
          {
            text: { name: "فيصل" }, // الجيل الخامس
            searchName: "فيصل أحمد عبدالله"
          },
        ]
      }
    ]
  },
  {
text: { name: "عبدالرحمن" }, // الجيل الثاني
searchName: "عبدالرحمن عبدالعزيز عبدالرحمن",
children: [
  {
    text: { name: "صالح" }, // الجيل الثالث
    searchName: "صالح عبدالرحمن عبدالعزيز",
    children: [
      {
        text: { name: "عبدالرحمن" }, // الجيل الرابع
        searchName: "عبدالرحمن صالح عبدالرحمن",
        children: [
          {
            text: { name: "إياد" }, // الجيل الخامس
            searchName: "إياد عبدالرحمن صالح"
          }
        ]
      },
      {
        text: { name: "ربدي" }, // الجيل الرابع
        searchName: "ربدي صالح عبدالرحمن",
        children: [
          {
            text: { name: "صالح" }, // الجيل الخامس
            searchName: "صالح ربدي صالح"
          },
          {
            text: { name: "فهد" }, // الجيل الخامس
            searchName: "فهد ربدي صالح"
          }
        ]
      },
      {
        text: { name: "عبدالعزيز" }, // الجيل الرابع
        searchName: "عبدالعزيز صالح عبدالرحمن",
      }
    ]
  }
]

  },
  {
    text: { name: "علي" }, // الجيل الثاني
searchName: "علي عبدالعزيز عبدالرحمن",
children: [
  {
    text: { name: "إبراهيم" }, // الجيل الثالث
    searchName: "إبراهيم علي عبدالعزيز",
    children: [
      {
        text: { name: "أحمد" }, // الجيل الرابع
        searchName: "أحمد إبراهيم علي",
        children: [
          {
            text: { name: "إبراهيم" }, // الجيل الخامس
            searchName: "إبراهيم أحمد إبراهيم"
          },
          {
            text: { name: "سلطان" }, // الجيل الخامس
            searchName: "سلطان أحمد إبراهيم"
          }
        ]
      },
      {
        text: { name: "علي" }, // الجيل الرابع
        searchName: "علي إبراهيم علي",
        children: [
          {
            text: { name: "نايف" }, // الجيل الخامس
            searchName: "نايف علي إبراهيم"
          },
          {
            text: { name: "إبراهيم" }, // الجيل الخامس
            searchName: "إبراهيم علي إبراهيم"
          },
          {
            text: { name: "ماجد" }, // الجيل الخامس
            searchName: "ماجد علي إبراهيم"
          },
          {
            text: { name: "عبدالله" }, // الجيل الخامس
            searchName: "عبدالله علي إبراهيم"
          }
        ]
      },
      {
        text: { name: "محمد" }, // الجيل الرابع
        searchName: "محمد إبراهيم علي",
        children: [
          {
            text: { name: "فهد" }, // الجيل الخامس
            searchName: "فهد محمد إبراهيم"
          },
          {
            text: { name: "إبراهيم" }, // الجيل الخامس
            searchName: "إبراهيم محمد إبراهيم"
          },
          {
            text: { name: "أصيل" }, // الجيل الخامس
            searchName: "أصيل محمد إبراهيم"
          }
        ]
      },
      {
        text: { name: "عبدالناصر" }, // الجيل الرابع
        searchName: "عبدالناصر إبراهيم علي"
      }
    ]
  },
  {
    text: { name: "فهد" }, // الجيل الثالث
    searchName: "فهد علي عبدالعزيز",
    children: [
      {
        text: { name: "علي" }, // الجيل الرابع
        searchName: "علي فهد علي",
        children: [
          {
            text: { name: "طلال" }, // الجيل الخامس
            searchName: "طلال علي فهد"
          }
        ]
      },
      {
        text: { name: "رائد" }, // الجيل الرابع
        searchName: "رائد فهد علي"
      },
      {
        text: { name: "عبدالإله" }, // الجيل الرابع
        searchName: "عبدالإله فهد علي"
      }
    ]
  },
  {
    text: { name: "عبدالرحمن" }, // الجيل الثالث
    searchName: "عبدالرحمن علي عبدالعزيز",
    children: [
      {
        text: { name: "علي" }, // الجيل الرابع
        searchName: "علي عبدالرحمن علي"
      },
      {
        text: { name: "سليمان" }, // الجيل الرابع
        searchName: "سليمان عبدالرحمن علي"
      }
    ]
  },
  {
    text: { name: "عبدالعزيز" }, // الجيل الثالث
    searchName: "عبدالعزيز علي عبدالعزيز",
    children: [
      {
        text: { name: "علي" }, // الجيل الرابع
        searchName: "علي عبدالعزيز علي"
      }
    ]
  }
]

    
  },
  {
text: { name: "فهد" }, // الجيل الثاني
searchName: "فهد عبدالعزيز",
children: [
  {
    text: { name: "سليمان" }, // الجيل الثالث
    searchName: "سليمان فهد عبدالعزيز",
    children: [
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد سليمان فهد",
        children: [
          {
            text: { name: "سليمان" }, // الجيل الخامس
            searchName: "سليمان فهد سليمان"
          }
        ]
      },
      {
        text: { name: "ماجد" }, // الجيل الرابع
        searchName: "ماجد سليمان فهد",
        children: [
          {
            text: { name: "سليمان" }, // الجيل الخامس
            searchName: "سليمان ماجد سليمان"
          },
          {
            text: { name: "عزام" }, // الجيل الخامس
            searchName: "عزام ماجد سليمان"
          }
        ]
      },
      {
        text: { name: "عمر" }, // الجيل الرابع
        searchName: "عمر سليمان فهد"
      },
      {
        text: { name: "صالح" }, // الجيل الرابع
        searchName: "صالح سليمان فهد"
      },
      {
        text: { name: "زياد" }, // الجيل الرابع
        searchName: "زياد سليمان فهد"
      }
    ]
  },
  {
    text: { name: "إبراهيم" }, // الجيل الثالث
    searchName: "إبراهيم فهد عبدالعزيز",
    children: [
      {
        text: { name: "خالد" }, // الجيل الرابع
        searchName: "خالد إبراهيم فهد"
      },
      {
        text: { name: "محمد" }, // الجيل الرابع
        searchName: "محمد إبراهيم فهد"
      },
      {
        text: { name: "ربدي" }, // الجيل الرابع
        searchName: "ربدي إبراهيم فهد"
      },
      {
        text: { name: "أحمد" }, // الجيل الرابع
        searchName: "أحمد إبراهيم فهد"
      }
    ]
  },
  {
    text: { name: "صالح" }, // الجيل الثالث
    searchName: "صالح فهد عبدالعزيز",
    children: [
      {
        text: { name: "محمد" }, // الجيل الرابع
        searchName: "محمد صالح فهد"
      },
      {
        text: { name: "هيثم" }, // الجيل الرابع
        searchName: "هيثم صالح فهد",
        children: [
          {
            text: { name: "نواف" }, // الجيل الخامس
            searchName: "نواف هيثم صالح"
          }
        ]
      }
    ]
  },
  {
    text: { name: "خالد" }, // الجيل الثالث
    searchName: "خالد فهد عبدالعزيز",
    children: [
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد خالد فهد"
      },
      {
        text: { name: "عبدالله" }, // الجيل الرابع
        searchName: "عبدالله خالد فهد"
      }
    ]
  },
  {
    text: { name: "عبدالعزيز" }, // الجيل الثالث
    searchName: "عبدالعزيز فهد عبدالعزيز",
    children: [
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد عبدالعزيز فهد"
      }
    ]
  },
  {
    text: { name: "علي" }, // الجيل الثالث
    searchName: "علي فهد عبدالعزيز",
    children: [
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد علي فهد"
      }
    ]
  },
  {
    text: { name: "أحمد" }, // الجيل الثالث
    searchName: "أحمد فهد عبدالعزيز"
  },
  {
    text: { name: "محمد" }, // الجيل الثالث
    searchName: "محمد فهد عبدالعزيز",
    children: [
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد محمد فهد"
      },
      {
        text: { name: "فيصل" }, // الجيل الرابع
        searchName: "فيصل محمد فهد"
      },
      {
        text: { name: "أحمد" }, // الجيل الرابع
        searchName: "أحمد محمد فهد"
      }
    ]
  },
  {
    text: { name: "عبدالرحمن" }, // الجيل الثالث
    searchName: "عبدالرحمن فهد عبدالعزيز",
    children: [
      {
        text: { name: "نايف" }, // الجيل الرابع
        searchName: "نايف عبدالرحمن فهد"
      },
      {
        text: { name: "عبدالله" }, // الجيل الرابع
        searchName: "عبدالله عبدالرحمن فهد"
      }
    ]
  },
  {
    text: { name: "الربدي" }, // الجيل الثالث
    searchName: "الربدي فهد عبدالعزيز",
    children: [
      {
        text: { name: "فهد" }, // الجيل الرابع
        searchName: "فهد الربدي فهد"
      },
      {
        text: { name: "تركي" }, // الجيل الرابع
        searchName: "تركي الربدي فهد"
      },
      {
        text: { name: "نواف" }, // الجيل الرابع
        searchName: "نواف الربدي فهد"
      },
      {
        text: { name: "بدر" }, // الجيل الرابع
        searchName: "بدر الربدي فهد"
      }
    ]
  }
]

  }
]

    },
    {
      text: { name: "فهد" },
      searchName: "فهد عبدالرحمن محمد",
      children: [
        { 
         text: { name: "عبدالله" }, // الجيل الثالث
searchName: "عبدالله فهد عبدالرحمن",
children: [
  {
    text: { name: "صالح" }, // الجيل الرابع
    searchName: "صالح عبدالله فهد",
    children: [
      {
        text: { name: "محمد" }, // الجيل الخامس
        searchName: "محمد صالح عبدالله",
        children: [
          {
            text: { name: "فارس" }, // الجيل السادس
            searchName: "فارس محمد صالح"
          },
          {
            text: { name: "عبدالله" }, // الجيل السادس
            searchName: "عبدالله محمد صالح",
            children: [
              {
                text: { name: "طلال" }, // الجيل السابع
                searchName: "طلال عبدالله محمد"
              }
            ]
          },
          {
            text: { name: "عبدالرحمن" }, // الجيل السادس
            searchName: "عبدالرحمن محمد صالح"
          },
          {
            text: { name: "صالح" }, // الجيل السادس
            searchName: "صالح محمد صالح"
          }
        ]
      },
      {
        text: { name: "فهد" }, // الجيل الخامس
        searchName: "فهد صالح عبدالله",
        children: [
          {
            text: { name: "عبدالله" }, // الجيل السادس
            searchName: "عبدالله فهد صالح",
            children: [
              {
                text: { name: "فهد" }, // الجيل السابع
                searchName: "فهد عبدالله فهد"
              }
            ]
          }
        ]
      },
      {
        text: { name: "عبدالعزيز" }, // الجيل الخامس
        searchName: "عبدالعزيز صالح عبدالله",
        children: [
          {
            text: { name: "منصور" }, // الجيل السادس
            searchName: "منصور عبدالعزيز صالح"
          },
          {
            text: { name: "فيصل" }, // الجيل السادس
            searchName: "فيصل عبدالعزيز صالح"
          }
        ]
      },
      {
        text: { name: "إبراهيم" }, // الجيل الخامس
        searchName: "إبراهيم صالح عبدالله",
        children: [
          {
            text: { name: "صالح" }, // الجيل السادس
            searchName: "صالح إبراهيم صالح"
          },
          {
            text: { name: "عبدالله" }, // الجيل السادس
            searchName: "عبدالله إبراهيم صالح"
          }
        ]
      },
      {
        text: { name: "أحمد" }, // الجيل الخامس
        searchName: "أحمد صالح عبدالله",
        children: [
          {
            text: { name: "فيصل" }, // الجيل السادس
            searchName: "فيصل أحمد صالح"
          }
        ]
      },
      {
        text: { name: "سليمان" }, // الجيل الخامس
        searchName: "سليمان صالح عبدالله",
        children: [
          {
            text: { name: "أحمد" }, // الجيل السادس
            searchName: "أحمد سليمان صالح"
          },
          {
            text: { name: "أياد" }, // الجيل السادس
            searchName: "أياد سليمان صالح"
          }
        ]
      }
    ]
  }
]
        
        },
        { text: { name: "عبدالرحمن" }, // الجيل الثالث
searchName: "عبدالرحمن فهد عبدالرحمن",
children: [
  {
    text: { name: "فهد" }, // الجيل الرابع
    searchName: "فهد عبدالرحمن فهد"
  },
  {
    text: { name: "محمد" }, // الجيل الرابع
    searchName: "محمد عبدالرحمن الفهد",
    children: [
  {
    text: { name: "عبدالرحمن" }, // الجيل الرابع
    searchName: "عبدالرحمن محمد عبدالرحمن",
    children: [
  {
    text: { name: "محمد" }, // الجيل الرابع
    searchName: "محمد عبدالرحمن محمد",
  },]
  }, 
    {
    text: { name: "فهد" }, // الجيل الرابع
    searchName: "فهد محمد عبدالرحمن"
  }, 
    {
    text: { name: "عبدالإله" }, // الجيل الرابع
    searchName: "عبدالإله محمد عبدالرحمن"
  },



]
  },
  {
    text: { name: "إبراهيم" }, // الجيل الرابع
    searchName: "إبراهيم عبدالرحمن فهد",
    children: [
  {
    text: { name: "عبدالرحمن" }, // الجيل الرابع
    searchName: "عبدالرحمن إبراهيم عبدالرحمن"
  },
    {
    text: { name: "محمد" }, // الجيل الرابع
    searchName: "محمد إبراهيم عبدالرحمن"
  },
    {
    text: { name: "يوسف" }, // الجيل الرابع
    searchName: "يوسف إبراهيم عبدالرحمن"
  },
    {
    text: { name: "معاذ" }, // الجيل الرابع
    searchName: "معاذ إبراهيم عبدالرحمن"
  },
    {
    text: { name: "عبدالعزيز" }, // الجيل الرابع
    searchName: "عبدالعزيز إبراهيم عبدالرحمن"
  },

]
  },
]
      },
        { 
         text: { name: "سليمان" }, // الجيل الثالث
searchName: "سليمان الفهد",
children: [
  {
    text: { name: "عبدالعزيز" }, // الجيل الرابع
    searchName: "عبدالعزيز سليمان الفهد",
    children: [
      {
        text: { name: "سليمان" },
        searchName: "سليمان عبدالعزيز سليمان",
         children: [
      {
        text: { name: "عبدالعزيز" },
        searchName: "عبدالعزيز سليمان عبدالعزيز"
      },
      {
        text: { name: "مساعد" },
        searchName: "مساعد سليمان عبدالعزيز"
      },
      {
        text: { name: "نايف" },
        searchName: "نايف سليمان عبدالعزيز"
      },

    ]
      },
      {
        text: { name: "سلطان" },
        searchName: "سلطان عبدالعزيز سليمان",
        children: [
          {
            text: { name: "خالد" },
            searchName: "خالد سلطان عبدالعزيز"
          },
          {
            text: { name: "أمير" },
            searchName: "أمير سلطان عبدالعزيز"
          },
          {
            text: { name: "عبدالعزيز" },
            searchName: "عبدالعزيز سلطان عبدالعزيز"
          }
        ]
      },
      {
        text: { name: "فهد" },
        searchName: "فهد عبدالعزيز سليمان",
        children: [
          {
            text: { name: "تركي" },
            searchName: "تركي فهد عبدالعزيز"
          },
          {
            text: { name: "عبدالعزيز" },
            searchName: "عبدالعزيز فهد عبدالعزيز"
          }
        ]
      },
      {
        text: { name: "أحمد" },
        searchName: "أحمد عبدالعزيز سليمان",
        children: [
          {
            text: { name: "عبدالعزيز" },
            searchName: "عبدالعزيز أحمد عبدالعزيز"
          }
        ]
      },
      {
        text: { name: "ناصر" },
        searchName: "ناصر عبدالعزيز سليمان",
        children: [
          {
            text: { name: "ربدي" },
            searchName: "ربدي ناصر عبدالعزيز"
          }
        ]
      },
      {
        text: { name: "خالد" },
        searchName: "خالد عبدالعزيز سليمان"
      }
    ]
  },
  {
    text: { name: "محمد" }, // الجيل الرابع
    searchName: "محمد سليمان الفهد",
    children: [
      {
        text: { name: "سليمان" },
        searchName: "سليمان محمد سليمان"
      },
      {
        text: { name: "عبدالعزيز" },
        searchName: "عبدالعزيز محمد سليمان"
      },
      {
        text: { name: "فيصل" },
        searchName: "فيصل محمد سليمان"
      },
      {
        text: { name: "عبدالله" },
        searchName: "عبدالله محمد سليمان"
      }
    ]
  },
  {
    text: { name: "فهد" }, // الجيل الرابع
    searchName: "فهد سليمان الفهد",
    children: [
      {
        text: { name: "زياد" },
        searchName: "زياد فهد سليمان",
        children: [
          {
            text: { name: "فهد" },
            searchName: "فهد زياد فهد"
          }
        ]
      },
      {
        text: { name: "محمد" },
        searchName: "محمد فهد سليمان"
      }
    ]
  }
]

      },
        { 
text: { name: "علي" }, // الجيل الثالث
  searchName: "علي فهد عبدالرحمن",
  children: [
    {
      text: { name: "فهد" }, // الجيل الرابع
      searchName: "فهد علي فهد",
      children: [
        {
          text: { name: "عبدالله" }, // الجيل الخامس
          searchName: "عبدالله فهد علي",
          children: [
            { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن عبدالله فهد" }, // الجيل السادس
            { text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز عبدالله فهد" }, // الجيل السادس
            { text: { name: "فهد" }, searchName: "فهد عبدالله فهد" } // الجيل السادس
          ]
        },
        {
          text: { name: "عبدالعزيز" }, // الجيل الخامس
          searchName: "عبدالعزيز فهد علي",
          children: [
            { text: { name: "فهد" }, searchName: "فهد عبدالعزيز فهد" }, // الجيل السادس
            { text: { name: "عبدالله" }, searchName: "عبدالله عبدالعزيز فهد" } // الجيل السادس
          ]
        },
        { text: { name: "خالد" }, searchName: "خالد فهد علي" }, // الجيل الخامس
        {
          text: { name: "علي" }, // الجيل الخامس
          searchName: "علي فهد علي",
          children: [
            { text: { name: "فهد" }, searchName: "فهد علي فهد" }, // الجيل السادس
            { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن علي فهد" }, // الجيل السادس
            { text: { name: "سعود" }, searchName: "سعود علي فهد" } // الجيل السادس
          ]
        },
        {
          text: { name: "محمد" }, // الجيل الخامس
          searchName: "محمد فهد علي",
          children: [
            { text: { name: "عاصم" }, searchName: "عاصم محمد فهد" } // الجيل السادس
          ]
        },
        {
          text: { name: "يوسف" }, // الجيل الخامس
          searchName: "يوسف فهد علي",
          children: [
            { text: { name: "فهد" }, searchName: "فهد يوسف فهد" } // الجيل السادس
          ]
        }
      ]
    },
    {
      text: { name: "سليمان" }, // الجيل الرابع
      searchName: "سليمان علي الفهد",
      children: [
        {
          text: { name: "خالد" }, // الجيل الخامس
          searchName: "خالد سليمان علي",
          children: [
            { text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز خالد سليمان" }, // الجيل السادس
            { text: { name: "فراس" }, searchName: "فراس خالد سليمان" } // الجيل السادس
          ]
        },
        { text: { name: "علي" }, searchName: "علي سليمان علي" }, // الجيل الخامس
        { text: { name: "محمد" }, searchName: "محمد سليمان علي" }, // الجيل الخامس
        { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن سليمان علي" } // الجيل الخامس
      ]
    },
    {
      text: { name: "إبراهيم" }, // الجيل الرابع
      searchName: "إبراهيم علي الفهد",
      children: [
        { text: { name: "علي" }, searchName: "علي إبراهيم علي" }, // الجيل الخامس
        { text: { name: "أحمد" }, searchName: "أحمد إبراهيم علي" }, // الجيل الخامس
        { text: { name: "عبدالله" }, searchName: "عبدالله إبراهيم علي" } // الجيل الخامس
      ]
    }
  ]
},
      ]
      
      
    },
    {
      text: { name: "محمد" }, // الجيل الأول
  searchName: "محمد",
  children: [
    {
      text: { name: "عبدالله" }, // الجيل الثاني
      searchName: "عبدالله محمد",
      children: [
        {
          text: { name: "محمد" }, searchName: "محمد عبدالله محمد",
          children: [
            { text: { name: "أحمد" }, searchName: "أحمد محمد عبدالله" } // الجيل الرابع
          ]
        },
        {
          text: { name: "صالح" }, searchName: "صالح عبدالله محمد",
          children: [
            { text: { name: "آدم" }, searchName: "آدم صالح عبدالله" }, // الجيل الرابع
            { text: { name: "سامي" }, searchName: "سامي صالح عبدالله" } // الجيل الرابع
          ]
        },
        {
          text: { name: "علي" }, searchName: "علي عبدالله محمد",
          children: [
            {
              text: { name: "عبدالله" }, searchName: "عبدالله علي عبدالله",
              children: [
                { text: { name: "فراس" }, searchName: "فراس عبدالله علي" } // الجيل الخامس
              ]
            },
            {
              text: { name: "عمر" }, searchName: "عمر علي عبدالله",
              children: [
                { text: { name: "علي" }, searchName: "علي عمر علي" } // الجيل الخامس
              ]
            },
            { text: { name: "خالد" }, searchName: "خالد علي عبدالله" } // الجيل الرابع
          ]
        },
        {
          text: { name: "فهد" }, searchName: "فهد عبدالله محمد",
          children: [
            {
              text: { name: "عبدالله" }, searchName: "عبدالله فهد عبدالله",
              children: [
                { text: { name: "فهد" }, searchName: "فهد عبدالله فهد" } // الجيل الخامس
              ]
            },
            { text: { name: "وليد" }, searchName: "وليد فهد عبدالله" } // الجيل الرابع
          ]
        },
        { text: { name: "إبراهيم" }, searchName: "إبراهيم عبدالله محمد" }, // الجيل الثالث
        {
          text: { name: "عبدالعزيز" }, searchName: "عبدالعزيز عبدالله محمد",
          children: [
            { text: { name: "محمد" }, searchName: "محمد عبدالعزيز عبدالله" } // الجيل الرابع
          ]
        },
        {
          text: { name: "أحمد" }, searchName: "أحمد عبدالله محمد",
          children: [
            { text: { name: "فارس" }, searchName: "فارس أحمد عبدالله" },
            { text: { name: "فهد" }, searchName: "فهد أحمد عبدالله" },
            { text: { name: "محمد" }, searchName: "محمد أحمد عبدالله" },
            { text: { name: "عبدالله" }, searchName: "عبدالله أحمد عبدالله" }
          ]
        },
        { text: { name: "عبدالناصر" }, searchName: "عبدالناصر عبدالله محمد" }, // الجيل الثالث
        { text: { name: "ماجد" }, searchName: "ماجد عبدالله محمد" }, // الجيل الثالث
        {
          text: { name: "عبدالمجيد" }, searchName: "عبدالمجيد عبدالله محمد",
          children: [
            { text: { name: "عبدالله" }, searchName: "عبدالله عبدالمجيد عبدالله" },
            { text: { name: "إبراهيم" }, searchName: "إبراهيم عبدالمجيد عبدالله" }
          ]
        },
        { text: { name: "عبدالسلام" }, searchName: "عبدالسلام عبدالله محمد",
        children: [
            { text: { name: "خالد" }, searchName: "خالد عبدالسلام عبدالله" },
          ] }, // الجيل الثالث
        { text: { name: "عبدالحميد" }, searchName: "عبدالحميد عبدالله محمد" }, // الجيل الثالث
        { text: { name: "إبراهيم" }, searchName: "إبراهيم عبدالله محمد" }, // الجيل الثالث
        { text: { name: "سليمان" }, searchName: "سليمان عبدالله محمد" } // الجيل الثالث
      ]
    }
  ]
    },
  ]

 },              { text: { name: "عبدالله" },// العبدلله
              searchName: "عبدالله محمد عبدالرحمن",
              children: [{
      text: { name: "محمد" }, // الجيل الثاني
      searchName: "محمد عبدالله محمد",
      children: [
        { text: { name: "سليمان" }, searchName: "سليمان محمد عبدالله" } // الجيل الثالث
      ]
    },
    {
      text: { name: "صالح" }, // الجيل الثاني
      children: [
        {
          text: { name: "عبدالله" }, // الجيل الثالث
          children: [
            {
              text: { name: "محمد" }, // الجيل الرابع
              children: [                {
                  text: { name: "وليد" }, // الجيل الخامس
                  searchName: "وليد محمد عبدالله",
                  children: [
                    { text: { name: "وافي" }, searchName: "وافي وليد محمد" } // الجيل السادس
                  ]
                },
                {
                  text: { name: "ريان" }, // الجيل الخامس
                  searchName: "ريان محمد عبدالله",
                  children: [
                    { text: { name: "نواف" }, searchName: "نواف ريان محمد" } // الجيل السادس
                  ]
                },
                { text: { name: "عبدالله" }, searchName: "عبدالله محمد عبدالله" }, // الجيل الخامس
                { text: { name: "صالح" }, searchName: "صالح محمد عبدالله" }, // الجيل الخامس
                { text: { name: "فيصل" }, searchName: "فيصل محمد عبدالله" } // الجيل الخامس
              ]
            },            {
              text: { name: "فهد" }, // الجيل الرابع
              searchName: "فهد عبدالله صالح",
              children: [
                { text: { name: "عبدالله" }, searchName: "عبدالله فهد عبدالله" }, // الجيل الخامس
                { text: { name: "محمد" }, searchName: "محمد فهد عبدالله" }, // الجيل الخامس
                { text: { name: "عمر" }, searchName: "عمر فهد عبدالله" }, // الجيل الخامس
              ]
            },            {
              text: { name: "أحمد" }, // الجيل الرابع
              searchName: "أحمد عبدالله صالح",
              children: [
                { text: { name: "خالد" }, searchName: "خالد أحمد عبدالله" }, // الجيل الخامس
                { text: { name: "محمد" }, searchName: "محمد أحمد عبدالله" }, // الجيل الخامس
                { text: { name: "عبدالله" }, searchName: "عبدالله أحمد عبدالله" }, // الجيل الخامس
              ]
            },
            {
              text: { name: "صالح" }, // الجيل الرابع
              searchName: "صالح عبدالله صالح",
              children: [
                { text: { name: "خالد" }, searchName: "خالد صالح عبدالله" } // الجيل الخامس
              ]
            },
            { text: { name: "بدر" }, searchName: "بدر عبدالله صالح" }, // الجيل الرابع
            {
              text: { name: "عبدالعزيز" }, // الجيل الرابع
              searchName: "عبدالعزيز عبدالله صالح"
            },
            { text: { name: "سلطان" }, searchName: "سلطان عبدالله صالح" } // الجيل الرابع
          ]
        },
        {
          text: { name: "عبدالرحمن" }, // الجيل الثالث
          children: [            {
              text: { name: "محمد" }, // الجيل الرابع
              searchName: "محمد عبدالرحمن صالح",
              HTMLclass: "special-node",
              children: [
                { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن محمد عبدالرحمن" }, // الجيل الخامس
                { text: { name: "عبدالمحسن" }, searchName: "عبدالمحسن محمد عبدالرحمن" }, // الجيل الخامس
                { text: { name: "عبدالله" }, searchName: "عبدالله محمد عبدالرحمن" }, // الجيل الخامس
                { text: { name: "المنذر" },
                  searchName: "المنذر محمد عبدالرحمن",
                  HTMLclass: "creator",
                },
                { text: { name: "سليمان" }, searchName: "سليمان محمد عبدالرحمن" } // الجيل الخامس
              ]
            },
            {
              text: { name: "عبدالله" }, // الجيل الرابع
              children: [
                { text: { name: "عمر" }, searchName: "عمر عبدالله عبدالرحمن" }, // الجيل الخامس
                { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن عبدالله عبدالرحمن" }, // الجيل الخامس
                { text: { name: "صالح" }, searchName: "صالح عبدالله عبدالرحمن" } // الجيل الخامس
              ]
            },
            {
              text: { name: "عبدالعزيز" }, // الجيل الرابع
              children: [
                { text: { name: "فيصل" }, searchName: "فيصل عبدالعزيز عبدالرحمن" }, // الجيل الخامس
                { text: { name: "عبدالرحمن" }, searchName: "عبدالرحمن عبدالعزيز عبدالرحمن" } // الجيل الخامس
              ]
            }
          ]
        }
      ]
    },
    {
      text: { name: "عبدالعزيز" }, // الجيل الثاني
      children: [
        {
          text: { name: "سليمان" }, // الجيل الثالث
          children: [
            {
              text: { name: "محمد" }, // الجيل الرابع
              children: [
                { text: { name: "بندر" } }, // الجيل الخامس
                { text: { name: "سليمان" } } // الجيل الخامس
              ]
            },
            {
              text: { name: "فهد" }, // الجيل الرابع
              children: [
                { text: { name: "علي" } }, // الجيل الخامس
                { text: { name: "فارس" } }, // الجيل الخامس
                { text: { name: "عبدالله" } } // الجيل الخامس
              ]
            },
            {
              text: { name: "خالد" }, // الجيل الرابع
              children: [
                { text: { name: "ربيع" } }, // الجيل الخامس
                { text: { name: "المثنى" } }, // الجيل الخامس
                { text: { name: "البراء" } }, // الجيل الخامس
                { text: { name: "يزن" } } // الجيل الخامس
              ]
            },
            {
              text: { name: "أحمد" }, // الجيل الرابع
              children: [
                { text: { name: "محمد" } }, // الجيل الخامس
                { text: { name: "عمر" } } // الجيل الخامس
              ]
            },
            {
              text: { name: "ناصر" }, // الجيل الرابع
              children: [
                { text: { name: "سليمان" } }, // الجيل الخامس
                { text: { name: "عبدالعزيز" } }, // الجيل الخامس
                { text: { name: "أحمد" } }, // الجيل الخامس
                { text: { name: "عبدالله" } }, // الجيل الخامس
                { text: { name: "وافي" } } // الجيل الخامس
              ]
            },
            {
              text: { name: "إبراهيم" }, // الجيل الرابع
              children: [
                { text: { name: "فيصل" } }, // الجيل الخامس
                { text: { name: "نواف" } }, // الجيل الخامس
                { text: { name: "خليل" } }, // الجيل الخامس
                { text: { name: "محمد" } }, // الجيل الخامس
                { text: { name: "عبدالإله" } } // الجيل الخامس
              ]
            },
            {
              text: { name: "تركي" }, // الجيل الرابع
              children: [
                { text: { name: "سلطان" } }, // الجيل الخامس
                { text: { name: "الوليد" } }, // الجيل الخامس
                { text: { name: "يزيد" } } // الجيل الخامس
              ]
            }
          ]
        },
        { text: { name: "صالح" },// الجيل الثالث
        children: [
    {
      text: { name: "عبدالعزيز" }, // الجيل الرابع
    },
    {
      text: { name: "سلطان" }, // الجيل الرابع
      children: [
        {
          text: { name: "بدر" }, // الجيل الخامس
        },
        {
          text: { name: "صالح" }, // الجيل الخامس
        },
        {
          text: { name: "تركي" }, // الجيل الخامس
        },
      ],
    },
    {
      text: { name: "ثامر" },
      children: [
        {
          text: { name: "سعود" }, // الجيل الخامس
        },
        { text: { name: "صالح" } }
      
      
        ] // الجيل الرابع
    },
    {
      text: { name: "ماجد" }, // الجيل الرابع
    },
  ],
      
        }, // الجيل الثالث
        { text: { name: "أحمد" },
        children: [
        {
          text: { name: "عبدالعزيز" },
          children: [
        {
          text: { name: "أحمد" }, 
        },],},
          {text: { name: "عمر" },

          children: [
        {
          text: { name: "طلال" }, 
        },]
        },]
      
        }, // الجيل الثالث
        {
  text: { name: "عبدالله" },
  children: [
    {
      text: { name: "محمد" },
      children: [
        { text: { name: "فهد" } },
        { text: { name: "صالح" } },
        { text: { name: "عبدالرحمن" } },
        { text: { name: "ضاري" } },
        { text: { name: "عبدالله" } },
        { text: { name: "ماجد" } },
        { text: { name: "نايف" } },
      ],
    },
    {
      text: { name: "عبدالعزيز" },
      children: [
        { text: { name: "بدر" } },
        { text: { name: "سلطان" } },
        { text: { name: "عبدالله" } },
      ],
    },
    {
      text: { name: "تركي" },
      children: [
        { text: { name: "عبدالله" } },
        { text: { name: "فهد" } },
      ],
    },
    {
      text: { name: "نايف" },
      children: [
        { text: { name: "عبدالله" } },
        { text: { name: "سعود" } },
      ],
    },
    {
      text: { name: "بدر" },
      children: [
        { text: { name: "عبدالله" } },
        { text: { name: "مشعل" },
            },
      ],
    },
    {
      text: { name: "فيصل" },
      children: [
        { text: { name: "نواف" } },
        { text: { name: "عبدالعزيز" } },
        { text: { name: "عبدالله" } },
        { text: { name: "محمد" } },
      ]
    },
    {
      text: { name: "سلمان" },
      children: [
        { text: { name: "محمد" } },
      ]
    },
    {
      text: { name: "عبدالرحمن" },
    },
    { text: { name: "سعود" } },
  ],
}
, // الجيل الثالث
        { text: { name: "علي" },
         children: [
      {
      text: { name: "عبدالعزيز" },
      children: [
        { text: { name: "عبدالله" } }
        ]
       },
       {
      text: { name: "عبدالله" },
      children: [
        { text: { name: "فهد" } },
        { text: { name: "فيصل" } }
      ]
    },
    { text: { name: "محمد" } },
    {
      text: { name: "أحمد" },
      children: [
        { text: { name: "تركي" } },
        { text: { name: "الجوهرة" } }
      ]
    },
    { text: { name: "عبدالرحمن" },
   
  
    },
    { text: { name: "سليمان" } },
    { text: { name: "يوسف" } }
  ]
      
      
        }, // الجيل الثالث
        { text: { name: "عبدالرحمن" }, 
        children: [
      {
        text: { name: "عبدالعزيز" },
        children: [
          {text: { name: "عبدالرحمن" }},
          {text: { name: "عبدالله" }},
        ]
      }

              ]
        }, // الجيل الثالث
        { text: { name: "إبراهيم" },
        children: [  
          {
      text: { name: "خالد" },
      children: [
        { text: { name: "عاصم" } },
        { text: { name: "عبدالله" } },
        { text: { name: "أحمد" } }
      ]
    },
    { text: { name: "سفيان" } },
    {
      text: { name: "محمد" },
      children: [
        { text: { name: "عيسى" } },
        { text: { name: "عبدالله" } },
        { text: { name: "عبدالعزيز" } },
        { text: { name: "مروان" } }
      ]
    },
    {
      text: { name: "عبدالعزيز" },
      children: [
        { text: { name: "إبراهيم" } },
        { text: { name: "ريان" } }
      ]
    },
    {
      text: { name: "عدنان" },
      children: [
        { text: { name: "سعود" }, searchName: "سعود عدنان إبراهيم" }
      ]
    },
    {
      text: { name: "منصور" },
      children: [
        { text: { name: "عبدالله" } },
        { text: { name: "إبراهيم" } }
      ]
    }
  ]


                  
      
        }, // الجيل الثالث
        { text: { name: "فهد" },
        children:[
        { text: { name: "عبدالعزيز" } },
        { text: { name: "عبدالله" } },

        ]
      
        }, // الجيل الثالث
        { text: { name: "ناصر" },
        children:[
        { text: { name: "رضا" } },
        { text: { name: "هاشم" } },
        { text: { name: "عبدالعزيز" } },
        { text: { name: "محمد" } },


          ]
      
        } // الجيل الثالث
      ]
    }

                        ]

              }
            ]
          }
        ]
    }],  HTMLclass: "gen1", connector: "none"  
        }
        };
var tree = new Treant(chart_config);