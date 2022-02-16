// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const f_Three_handleSubmit = async <T extends string>(
  existingPromise: Promise<any>,
  otherProp: string
) => {
  await existingPromise
    .then((data) => {
      console.log('3 handle submit running now', otherProp);
    })
    .catch((exp) => {
      console.log('catch:', exp);
    });
};

const f_One_Register = (someProps): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1 f_One Register complete someProps:', someProps);
      resolve('f_One_Register complete ');
    }, 1000);
  });
};

const f_Two_login_Void = (someMoreProps): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2 f_Two login complete with:', someMoreProps);
      resolve('f_Two_login complete ');
    }, 4000);
  });
};

// we can make it wait for asyncf_Three_handleSubmit(
///////// Start commenting here //////////
// f_Three_handleSubmit(
//   f_One_Register('someProps').then(async (args) => {
//     await f_Two_login_Void('someMoreProps');
//   }),
//   'register'
// );
///////// stop commenting here //////////

// doesn't wait for async void
///////// case of void async without await - Start commenting here //////////
f_Three_handleSubmit(
  f_One_Register('someProps').then((args) => {
    f_Two_login_Void('someMoreProps');
  }),
  'register'
);
///////// stop commenting here //////////
