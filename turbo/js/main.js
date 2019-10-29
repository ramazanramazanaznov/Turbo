let obj = [
    {
        src: 'image/img1.jpg',
        h6: 'Mercedes G 63 AMG',
        p: '2015 il 4.4L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        whenclicked: 'description.html',
        price: '70000$',
        on: '70 000$',

    },
    {
        src: 'image/img2.jpg',
        p: '2016 il 1.6L 5 000km',
        h6: 'Skota Octavia',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        price: '20000$',
        on: '20 000$',
        whenclicked: 'description.html',
        height: "170px"
    },
    {
        src: 'image/img3.jpg',
        h6: 'Mercedes E220',
        p: '2012 il 3L 13 000km',
        span: 'Baki,16.02.2019',
        res: 'img-fluid',
        width: '200px',
        price: '65000$',
        on: '65 000$',
        whenclicked: 'description.html',
        height: "170px"
    },
    {
        src: 'image/img4.jpg',
        h6: 'BMW X7',
        p: '2019 il 4.4L 5 000km',
        span: 'Baki,01.10.2019',
        res: 'img-fluid',
        width: '200px',
        whenclicked: 'description.html',
        price: '100000$',
        on: '100 000$',
        height: "170px"
    },
    {
        src: 'image/img5.jpg',
        h6: 'Mercedes E220',
        p: '2017 il 2L 22 000km',
        span: 'Gence,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        price: '33000$',
        on: '33 000$',
        whenclicked: 'description.html',
        height: "170px"
    },
    {
        src: 'image/download6.png',
        h6: 'Range Rover',
        p: '2019 il 4.4L 0km',
        span: 'Baki,11.10.2019',
        res: 'img-fluid',
        width: '200px',
        price: '15000$',
        on: '15 000$',
        whenclicked: 'description.html',
        height: "170px"
    },
    {
        src: 'image/img7.jpg',
        h6: 'Ford Mustang',
        p: '2015 il 4.4L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        whenclicked: 'description.html',
        price: '53000$',
        on: '53 000$',
        height: "170px"
    },
    {
        src: 'image/img8.jpg',
        h6: 'Volkvagen Transporter',
        p: '2015 il 4.4L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        whenclicked: 'description.html',
        price: '77000$',
        on: '77 000$',
        height: "170px"
    },
    {
        src: 'image/img4.jpg',
        h6: 'BMW X7',
        p: '2015 il 4.4L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        price: '25000$',
        on: '25 000$',
        whenclicked: 'description.html',
        height: "170px"
    },
    {
        src: 'image/img5.jpg',
        h6: 'Mercedes G 63 AMG',
        p: '2015 il 4.4L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        price: '17000$',
        on: '17 000$',
        whenclicked: 'description.html',
        height: "170px"
    },
    {
        src: 'image/img3.jpg',
        h6: 'Mercedes G 63 AMG',
        p: '2015 il 4.4L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        whenclicked: 'description.html',
        price: '45000$',
        on: '45 000$',
        height: "170px"
    },
    {
        src: 'image/img9.jpg',
        h6: 'MTesla Model S',
        p: '2015 il 0.0L 47 000km',
        span: 'Baki,29.09.2019',
        res: 'img-fluid',
        width: '200px',
        whenclicked: 'description.html',
        price: '32000$',
        on: '32 000$',
        height: "170px"
    },

]
let all = document.getElementsByClassName('pieces')[0];


for (let f in obj) {
    let div = document.createElement('div');
    div.classList.add('piece');
    div.classList.add('col-lg-3');
    div.classList.add('col-md-3');
    div.classList.add('col-sm-3');
    div.id = 'btn';
 
    let salon = document.createElement('div');
    salon.classList.add('salon');
  
    salon.addEventListener('click', () => {
        localStorage.clear();
        let strObject = JSON.stringify(obj[f]);
        localStorage.setItem('Cars',strObject);
        document.location =  obj[f].whenclicked;
        console.log(obj[f]);
    })

    let image = document.createElement('div');
    image.classList.add('image');

    let description = document.createElement('div');
    description.classList.add('description');

    let h = document.createElement('h6');
    h.innerText = obj[f].h6;

    let p = document.createElement('p');
    p.innerText =  obj[f].p;
    let span = document.createElement('span');
    span.innerText =  obj[f].span;
    description.appendChild(h);
    description.appendChild(p);
    description.appendChild(span);

    let img = document.createElement('img');
    img.src =  obj[f].src;
    img.alt="car";
    img.style.position="relative";
    img.classList.add('img-fluid');

    let span2=document.createElement('span');
    span2.innerText=obj[f].on;
    span2.style.position="absolute";
    span2.style.zIndex="1";
    span2.style.bottom="81px";
    span2.style.padding="8px";
    span2.style.color="white";
    span2.style.fontWeight="bold"
    span2.style.backgroundColor="red"
    
    salon.appendChild(span2);

    let a = document.createElement('a');
    a.innerText =  obj[f].price;
    a.className = 'price'
    img.appendChild(a);

    image.appendChild(img)
    salon.appendChild(image);
    salon.appendChild(description);
    div.appendChild(salon);
    all.appendChild(div);
    console.log(all);
       
}

