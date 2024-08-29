const memberContainer = document.querySelector("#memberContainer");
const almContainer = document.querySelector("#almContainer");

function addTeamMembers(memberList, container) {
  memberList.forEach((mem) => {
    container.innerHTML += `<div class="col-12 col-sm-6 col-lg-3">
    <div
      class="single_advisor_profile wow fadeInUp"
      data-wow-delay="0.5s"
      style="
        visibility: visible;
        animation-delay: 0.5s;
        animation-name: fadeInUp;
      "
    >
      <!-- Profile Picture-->
      <div class="advisor_thumb">
        <img class="img-fluid" src="${mem.img_path}" alt="" />
        <!-- Social Info-->
        <div class="social-info">
          <a
            href="${mem.url}"
            ><i
              class="uil uil-linkedin"
              style="font-size: 1.5rem !important"
            ></i
          ></a>
        </div>
      </div>
      <!-- Team Details-->
      <div class="single_advisor_details_info">
        <h6>${mem.name}</h6>
        <p class="designation">${mem.designation}</p>
      </div>
    </div>
    </div>
    `;
  });
}

let teamMembers = [
  {
    name: "Rinkal Mav",
    url: "https://www.linkedin.com/in/rinkal-mav/",
    img_path: "images/rinkl.png",
    designation: "Lead",
  },
  {
    name: "Vaidehi Ghodasara",
    url: "https://www.linkedin.com/in/vaidehi-ghodasara-940aab263/",
    img_path: "images/vaidehi.png",
    designation: "Co-Lead",
  },
  {
    name: "Kshitiz Pandya",
    url: "https://www.linkedin.com/in/kshitiz-pandya/",
    img_path: "images/kshitij.png",
    designation: "Tech-Lead",
  },
  {
    name: "Samarth Chauhan",
    url: "https://www.linkedin.com/in/samarth-chauhan-a4666a257/",
    img_path: "images/samarth.png",
    designation: "Technical Team",
  },
  {
    name: "Anmol Chauhan",
    url: "https://www.linkedin.com/in/anmol-chauhan-1a2b2b233/",
    img_path: "images/anmol.png",
    designation: "Technical Team",
  },
  {
    name: "Kirtan Matalia",
    url: "https://www.linkedin.com/in/kirtan-matalia/",
    img_path: "images/Kirtan.png",
    designation: "Technical Team",
  },
  {
    name: "Sneh Shah",
    url: "https://www.linkedin.com/in/sneh-shah-4a534525a/",
    img_path: "images/sneh.png",
    designation: "Web Developer",
  },
  {
    name: "Parshwa Salot",
    url: "https://www.linkedin.com/in/parshwasalot/",
    img_path: "images/parshwa.png",
    designation: "Graphic Designer",
  },
  {
    name: "Jiya Thakkar",
    url: "https://www.linkedin.com/in/jiya-thakkar-8b3946253/",
    img_path: "images/jiya.png",
    designation: "Content Writer",
  },
];

let almMembers = [
  {
    name: "Zeel Amrutiya",
    url: "https://www.linkedin.com/in/zeel-amrutiya-5a03b0203/",
    img_path: "images/lead-1.png",
    designation: "Founder",
  },
  {
    name: "Aayush Ghadiya",
    url: "https://www.linkedin.com/in/ayush-ghadiya-8982581a9/",
    img_path: "images/co-lead-1.png",
    designation: "Co-Founder",
  },
  {
    name: "Megha Goriya",
    url: "https://www.linkedin.com/in/megha-goriya-067/",
    img_path: "images/co-lead-2.png",
    designation: "Co-Founder",
  },
  {
    name: "Jhanvi Shah",
    url: "https://www.linkedin.com/in/jhanvi-shah-99b98b165/",
    img_path: "images/Jhanvi.png",
    designation: "ML Team",
  },
  {
    name: "Nishit Patel",
    url: "https://www.linkedin.com/in/nishit-patel03/?originalSubdomain=in",
    img_path: "images/web-dev-2.png",
    designation: "Web Developer",
  },
  {
    name: "Shrey Makwana",
    url: "https://www.linkedin.com/in/shreymakwana4273/",
    img_path: "images/web-dev-3.png",
    designation: "Web Developer",
  },
  {
    name: "Vitan Tarpara",
    url: "https://www.linkedin.com/in/vitantarpara19/",
    img_path: "images/web-dev-1.png",
    designation: "Web Developer",
  },
  {
    name: "Omshree Butani",
    url: "https://www.linkedin.com/in/omshree-butani-51043320a/",
    img_path: "images/content-writer 1.png",
    designation: "Content Writer",
  },
  {
    name: "Shrey Navadiya",
    url: "https://www.linkedin.com/in/shrey-n-34085ba9/",
    img_path: "images/graphic.png",
    designation: "Graphic Designer",
  },
  {
    name: "Malav Champaneria",
    url: "https://www.linkedin.com/in/malav-champaneria-3152b41b6/",
    img_path: "images/member1.jpg",
    designation: "Member",
  },
  {
    name: "Jiten Bhalavat",
    url: "https://www.linkedin.com/in/jiten-bhalavat-812603209/",
    img_path: "images/member2.jpg",
    designation: "Member",
  },
];

addTeamMembers(teamMembers, memberContainer);
addTeamMembers(almMembers, almContainer);
