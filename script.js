function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "noor" && password === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
    showDay("glutes");
  } else {
    document.getElementById("loginError").innerText = "Wrong username or password";
  }
}

function logout() {
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("app").style.display = "none";
}

function showDay(day) {
  const container = document.getElementById("workoutContainer");

  if (day === "glutes") {
    container.innerHTML = `
      <h2>🍑 Glutes Day</h2>
      <div class="card">
        <img src="images/hip-thrust1.jpg" alt="Hip Thrust"> 
        <h3>HIP THRUST</h3>
        <p> 4 × 12 </p>
        </div>
      <div class="card">
      <img src="images/squat.jpg" alt="SQUAT">
      <h3>SQUAT</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/step-up.jpg" alt="STEP-UP">
      <h3>STEP-UP</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/RDL.jpg" alt="ROMANIAN DEADLIFT">
      <h3>ROMANIAN DEADLIFT</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/cable.jpg" alt="CABLE KICKBACK">
      <h3>CABLE KICKBACK</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/calf.jpg" alt="CALF RAISE">
      <h3>CALF RAISE</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/seated.jpg" alt="MACHINE SEATED ABDUCTION">
      <h3>MACHINE SEATED ABDUCTION</h3>
      <p>4 × 12 </p>
      </div>
    `;
  }

  if (day === "upper") {
    container.innerHTML = `
      <h2>💪 Upper Body Day</h2>
      <div class="card">
      <img src="images/pulldown.jpg" alt="LAT PULLDOWN">
      <h3>LAT PULLDOWN</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/shoulder.jpg" alt="SHOULDER PRESS">
      <h3>SHOULDER PRESS</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/dumbbell.jpg" alt="DUMBELL ROW">
      <h3>DUMBELL ROW</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/bicep.jpg" alt="BICEP CURLS">
      <h3>BICEP CURLS</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/tricep.jpg" alt="TRICEPS PUSHDOWN">
      <h3>TRICEPS PUSHDOWN</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/plank.jpg" alt="PLANK">
      <h3>PLANK</h3>
      <p>1 minute</p>
      </div>
      <div class="card">
      <img src="images/rear.jpg" alt="REAR DELT FLY">
      <h3>REAR DELT FLY</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/Face-pull.jpg" alt="FACE PULL">
      <h3>FACE PULL</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/seated-cable.jpg" alt="SEATED CABLE ROW">
      <h3>SEATED CABLE ROW</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/bent-over.jpg" alt="BENT OVER ROW">
      <h3>BENT OVER ROW</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/lateral.jpg" alt="LATERAL RAISES">
      <h3>LATERAL RAISES</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/hammer.jpg" alt="HAMMER CURLS">
      <h3>HAMMER CURLS</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/around.jpg" alt="AROUND THE WORLD">
      <h3>AROUND THE WORLD</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/high-row.jpg" alt="HIGH ROWS">
      <h3>HIGH ROWS</h3>
      <p>4 × 12 </p>
      </div>
    `;
  }

  if (day === "core") {
    container.innerHTML = `
      <h2>🔥 Core Day</h2>
      <div class="card">
      <img src="images/russian.jpg" alt="RUSSELL TWISTS">
      <h3>RUSSELL TWISTS</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/mountain.jpg" alt="MOUNTAIN CLIMBERS">
      <h3>MOUNTAIN CLIMBERS</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/plank.jpg" alt="PLANK">
      <h3>PLANK</h3>
      <p>1 minute</p>
      </div>
      <div class="card">
      <img src="images/side-plank.jpg" alt="SIDE PLANK">
      <h3>SIDE PLANK</h3>
      <p>1 minute</p>
      </div>
      <div class="card">
      <img src="images/side-bend.jpg" alt="DUMBELL SIDE BENDS">
      <h3>DUMBELL SIDE BENDS</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/crunch.jpg" alt="REVERSE CRUNCH">
      <h3>REVERSE CRUNCH</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/dead-bug.jpg" alt="DEAD BUG">
      <h3>DEAD BUG</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/bicycle.jpg" alt="BICYCLE CRUNCH">
      <h3>BICYCLE CRUNCH</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/leg-raises.jpg" alt="LEG RAISES">
      <h3>LEG RAISES</h3>
      <p>4 × 12 </p>
      </div>
      <div class="card">
      <img src="images/hollow-hold.jpg" alt="HOLLOW BODY POSITION">
      <h3>HOLLOW BODY POSITION</h3>
      <p>30 seconds</p>
      </div>
      <div class="card">
      <img src="images/upright.jpg" alt="UPRIGHT FLUTTER KICKS">
      <h3>UPRIGHT FLUTTER KICKS</h3>
      <p>30 seconds</p>
      </div>
    `;
  }

  if (day === "stretching") {
    container.innerHTML = `
      <h2>🧘 Stretching Day</h2>
      <div class="card">
      <img src="images/vacuum.jpg" alt="VACUUM EXERCISE">
      <h3>VACUUM EXERCISE</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/single-leg.jpg" alt="SINGLE LEG GLUTE BRIDGE">
      <h3>SINGLE LEG GLUTE BRIDGE</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/side-leg.jpg" alt="STANDING SIDE LEG">
      <h3>STANDING SIDE LEG</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/bird-dog.jpg" alt="BIRD DOG">
      <h3>BIRD DOG</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/standing.jpg" alt="QUADRICEPS STRETCH">
      <h3>QUADRICEPS STRETCH</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/lung.jpg" alt="LUNGE STRETCH">
      <h3>LUNGE STRETCH</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/hamstring.jpg" alt="HAMSTRINGS STRETCH">
      <h3>HAMSTRINGS STRETCH</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/four.jpg" alt="RECLINED FIGURE FOUR STRETCH">
      <h3>RECLINED FIGURE FOUR STRETCH</h3>
      <p>3 times</p>
      </div>
      <div class="card">
      <img src="images/chest.jpg" alt="KNEE TO CHEST STRETCH">
      <h3>KNEE TO CHEST STRETCH</h3>
      <p>3 times</p>
      </div>
    `;
  }
}