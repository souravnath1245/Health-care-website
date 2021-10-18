const doctors = [
  {
    id: 1,
    name: "Dr. Babatunde",
    img: "https://media.istockphoto.com/photos/portrait-of-middle-aged-asian-female-doctor-standing-in-hospital-picture-id1271328839?s=612x612",
    description: "",
    specialist: "Neurosurgeon",
    age: 45,
  },
  {
    id: 2,
    name: "Dr. Addition Smith",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "",
    specialist: "Neurosurgeon",
    age: 43,
  },
  {
    id: 3,
    name: "Dr. Sarah Taylor",
    img: "https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q=",
    description: "",
    specialist: "Dental Surgeon",
    age: 52,
  },
  {
    id: 4,
    name: "Dr. Mac Smith",
    img: "https://image.shutterstock.com/image-photo/doctor-wearing-medical-mask-gloves-260nw-1675175770.jpg",
    description: "",
    specialist: "Dentist",
    age: 35,
  },
  {
    id: 5,
    name: "Dr. Alison Backer",
    img: "https://media.istockphoto.com/photos/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-picture-id1203995945?b=1&k=20&m=1203995945&s=170667a&w=0&h=W5pDpUgxdsBroe9aFgJUzR0Ess8xPUoST1ZjEvVRgEQ=",
    description: "",
    specialist: "Neurosurgeon",
    age: 50,
  },
  {
    id: 6,
    name: "Dr. Jas Macham",
    img: "https://us.123rf.com/450wm/rido/rido2002/rido200200099/141040315-happy-smiling-african-doctor-looking-at-camera-in-medical-office-portrait-of-black-man-doctor-workin.jpg?ver=6",
    description: "",
    specialist: "Dental Surgeon",
    age: 66,
  },
  {
    id: 7,
    name: "Dr. John Miceal",
    img: "https://img.lovepik.com/photo/50136/7553.jpg_wh860.jpg",
    description: "",
    specialist: "Neurosurgeon",
    age: 48,
  },
  {
    id: 8,
    name: "Dr. Shane Warne",
    img: "https://media.istockphoto.com/photos/doctor-with-a-stethoscope-hand-in-her-pocket-closeup-of-a-female-picture-id1265438538?b=1&k=20&m=1265438538&s=170667a&w=0&h=9Deo8jS9LhC--tFcj_NciWy1Nz2L5rLHTAYXeAjq_f4=",
    description: "",
    specialist: "Dentist",
    age: 40,
  },
  {
    id: 9,
    name: "Dr. Luis Moris",
    img: "https://media.istockphoto.com/photos/female-doctor-at-the-hospital-picture-id510414344?k=20&m=510414344&s=612x612&w=0&h=67SC9C 3IGrdhY7E2aWqinMfey7XISmZzv4VFjIcUz2w=",
    description: "",
    specialist: "Neurosurgeon",
    age: 38,
  },
];


const images = [
    {img: ""}
]

const service = [
    {id: 1,
         title: "Hair Transplantation" ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "http://jituchauhan.com/site-templates/medical-website-template/00_haircare/images/service-1.jpg",

},
    {
        id: 2,
         title: "Laser Hair Treatment" ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "http://jituchauhan.com/site-templates/medical-website-template/00_haircare/images/service-2.jpg",

},
    { id: 3,
        title: "Tooth Restoration" ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "https://ichef.bbci.co.uk/news/976/cpsprodpb/2291/production/_110894880_gettyimages-1055182908.jpg",

},
    {
        id: 4,
         title: "Dental Care" ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "https://louisvilledentistry.net/wp-content/uploads/dental-bonding-820.jpg",

},
{ id: 5,
        title: "Cardiology" ,
        details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
        img : "https://www.fortisescorts.in/userfiles/image/cardiology.jpg",
        // img2: "https://www.getdoc.com/wp-content/uploads/2016/07/27faff5ddddd.jpg"

},
    {id: 6,
         title: "Medicine" ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "https://i1.wp.com/www.finddoctor24.com/wp-content/uploads/2017/11/find-doctor-24.jpg?fit=616%2C346&ssl=1",

},
    {id: 7,
         title: "Neurology" ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "https://www.cure2heal.com/asset/images/blog/672573830top-10-neurologists-of-india.jpg",

},
    { id: 8,
        title: "Nephrologist " ,
details : "Magna sea elitr aliquyam accusam sit sed, vero takimata diam justo duo aliquyam amet aliquyam r,ebum. Dolor lorem dolore justo.",
img : "https://www.verywellhealth.com/thmb/Vxl2r9rgNhnoKz33-v9KUsQJsgk=/3865x2576/filters:fill(87E3EF,1)/nurse-and-human-kidney-168509947-5833a8d15f9b58d5b1d95a6a.jpg",

},
   
];
