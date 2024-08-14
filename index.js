// change the background of nav bar

window.addEventListener(`scroll`, () => {
  if (window.scrollY >= 20) {
    document
      .querySelector(`.headerSection`)
      .classList.add(`headerSectionAnimation`);
  } else {
    document
      .querySelector(`.headerSection`)
      .classList.remove(`headerSectionAnimation`);
  }
});

// toggle menus for small and medium devices

const menusToggler = document.querySelector(`.menusToggler`);
const toggleTarget = document.querySelector(`.toggleTarget`);
menusToggler.addEventListener(`click`, (e) => {
  toggleTarget.classList.toggle("toggleAnimation");
  menusToggler.classList.toggle("menusTogglerAnimation");
});

// hero workoutVideos and videoTutorial box animation

let workoutVideos = 500;
let videoTutorial = 350;

function videosNumberBoxAnimation(target, videosNumber) {
  let i = 0;
  let interval = setInterval(() => {
    i++;
    document.querySelector(`.${target}`).innerText = `${i}+`;
    
    if (i === videosNumber) {
      clearInterval(interval);
    }
  }, 3);
}

videosNumberBoxAnimation('workoutVideos', workoutVideos);
videosNumberBoxAnimation('videoTutorial', videoTutorial);

// BMI, BMR and TDEE calculation

document.querySelector(`.claculateBmi`).addEventListener(`click`, (e) => {
  let height = document.querySelector(`.height`);
  let weight = document.querySelector(`.weight`);

  let age = document.querySelector(`.age`);
  let sex = document.querySelector(`.sex`);

  let activity = document.querySelector(`.activity`);

  const showBmiResult = document.querySelector(`.bmiResult`);
  const showBmrResult = document.querySelector(`.bmrResult`);
  const showTdeeResult = document.querySelector(`.tdeeResult`);

  //   BMI
  if (height.value && weight.value) {
    console.log("hi");
    height = Number(height.value);
    weight = Number(weight.value);

    if (height && weight) {
      if (height > 30 && weight > 15) {
        heightInMeter = height / 100;

        // BMI formula =Weight(kg) / (Height(m) * Height(m))

        let bmi = weight / (heightInMeter * heightInMeter);
        showBmiResult.innerText = `your BMI is ${parseFloat(bmi.toFixed(4))}`;

        // BMR

        if (age.value && sex.value) {
          console.log(`hi 2`);
          age = Number(age.value);

          if (age) {
            let bmr;

            if (sex.value == "men") {
              // BMR formula for Men =88.362+(13.397×Weight in kg)+(4.799×Height in cm)−(5.677×Age in years)

              bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
              showBmrResult.innerText=`Your BMR as a MEN is ${parseFloat(bmr.toFixed(4))} calories/day`;
            } else if (sex.value == "women") {
              // BMR formula for Women =447.593+(9.247×Weight in kg)+(3.098×Height in cm)−(4.330×Age in years)

              bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
              showBmrResult.innerText=
                `Your BMR as a WOMEN is ${parseFloat(bmr.toFixed(4))} calories/day`;
            } else {
              showBmrResult.innerText=`please select your sex to get your BMR`;
              return;
            }

            // TDEE

            if (activity.value) {
              console.log(`hi 3`);
              activity = Number(activity.value);
              if (activity & bmr) {

                // TDEE formula =BMR×Activity Factor

                let tdee = bmr * activity;
                showTdeeResult.innerText=`Your TDEE is ${parseFloat(tdee.toFixed(4))} calories/day`;
              } else {
                showTdeeResult.innerText=`please select your activity to get your TDEE`;
              }
            } else {
              showTdeeResult.innerText=`please select your activity to get your TDEE`;
            }
          } else {
            showBmrResult.innerText = `please give the correct input of age to get your BMR`;
          }
        } else {
          showBmrResult.innerText = `please input your age and select your sex to get your BMR`;
        }
      } else {
        showBmiResult.innerText = `please input correct height in "cm" and weight in "kg" to get your BMI`;
      }
    } else {
      showBmiResult.innerText = `please give the correct inputs of height and weight to get your BMI`;
    }
  } else {
    showBmiResult.innerText = `please input your height and weight to get your BMI`;
  }
});
