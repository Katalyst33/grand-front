const documentList = [
  {
    category: "Jane Cooper",
    category: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    category: "Application Form",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "CV",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Language  Certificate",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Letter Of Motivation",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Other",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Passport",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "School Certificate",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Study Certificate",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Work experience /Internship ",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  {
    category: "Work Sample",
    size: "200.5 KB",
    uploaded: "2 days ago",
    title: "document.jpg",
  },
  // More people...
];

const documentType = [
  { category: "Application Form" },
  { category: "CV" },
  { category: "Language  Certificate" },
  { category: "Letter Of Motivation" },
  { category: "Other" },
  { category: "Passport" },
  { category: "School Certificate" },
  { category: "Study Certificate" },
  { category: "Work experience /Internship " },
  { category: "Work Sample" },
];

const jhkj = {
  publicId: string,
  type: "image",
  for: "destination",
  name: "plam-tree_LICMX.png",
  path: "/uploads/destination/opt_plam-tree_LICMX.png",
  size: 11449452,
  ext: "png",
  used: false,
  crop: {
    100: "/uploads/destination/100/plam-tree_LICMX.png",
    500: "/uploads/destination/500/plam-tree_LICMX.png",
  },
};

let someArray = [
  { name: "Kristian", lines: "2,5,10" },
  { name: "John", lines: "1,19,26,96" },
  { name: "Kristian", lines: "2,58,160" },
  { name: "Felix", lines: "1,19,26,96" },
];

console.log(someArray, "??");

someArray = someArray.filter((person) => person.name != "John");
console.log(someArray, "hey??");
