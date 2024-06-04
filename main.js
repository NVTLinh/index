const listNavItem = document.querySelectorAll('.nav-link');

if (listNavItem.length) {
    listNavItem.forEach(function (item) {
        item.addEventListener('click', function () {
            const dsActive = document.querySelectorAll('.nav-active');
            dsActive.forEach(function (activeItem) {
                activeItem.classList.remove('nav-active')
            })
            item.classList.add('nav-active')
        })
    })
}

const SiderBarActive = document.querySelector('#sidebar')
const btnSideBar = document.querySelector('#btn')
if (SiderBarActive && btnSideBar) {
    btnSideBar.addEventListener('click', () => {
        SiderBarActive.classList.toggle('mini-sizeBar');
    })
}

const viewModal = document.querySelector('#view-modal')
const viewImg = document.querySelector('#view-img')
const btnView = document.querySelectorAll('.btn-action')
if (btnView) {
    btnView.forEach(function (actionView) {
        actionView.addEventListener('click', function () {
            const product = actionView.getAttribute('data-id')
            const anhSrc = document.querySelector(`#img-sp-${product}`)
            
            viewImg.setAttribute('src', anhSrc.getAttribute('src'))
            /* listImg.forEach(function (img) {
                const listSrc = img.getAttribute('src');
                viewImg.setAttribute('src', listSrc) 
            })*/
            viewModal.classList.toggle('d-none')
        })
    })

}

const closeModal = document.querySelector('.btn-close-modal')

if (closeModal) {
    closeModal.addEventListener('click', function () {
        viewModal.classList.add('d-none')
    })
}




























/* const ListData = [
    {
        id: 1,
        name: '[Resin] Goku 1/4 cực nét',
        dim_attribute: '40cm * 56cm * 24cm - (Dài * Cao * Sâu)',
        weight_attribute: '3kg',
        description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://i.ebayimg.com/images/g/aTsAAOSwMMxe-94F/s-l1200.webp'
    },
    {
        id: 2,
        name: '[Resin] Goku SSJ 4 1/4 cực nét',
        dim_attribute: '22cm * 56cm * 22cm - (Dài * Cao * Sâu)',
        weight_attribute: '3kg',s
        description: 'Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://media.karousell.com/media/photos/products/2022/4/8/original_dragonball_goku_super_1649412048_ec3eb94f_progressive.jpg'
    },
    {
        id: 3,
        name: '[Resin] Broly',
        dim_attribute: '24cm * 42cm * 14cm - (Dài * Cao * Sâu)',
        weight_attribute: '2,1kg',
        description: 'Mô hình Broly Resin cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.',
        image: 'https://www.clubhousestatues.com/cdn/shop/files/B169DB90-2CDC-4AB7-AE16-57A43041367E.jpg?v=1703168952&width=1946'
    },
    {
        id: 4,
        name: '[Resin] Vegeta bán thân',
        dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
        weight_attribute: '1,6kg',
        description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
        image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
    },
    {
        id: 4,
        name: '[Resin] Vegeta bán thân',
        dim_attribute: '28cm * 37cm * 15cm - (Dài * Cao * Sâu)',
        weight_attribute: '1,6kg',
        description: 'Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 -15 ngày nha.',
        image: 'https://cdn11.bigcommerce.com/s-ttxokgrlfn/images/stencil/1280x1280/products/1909/13134/_20231012202426__22780.1697114997.jpg?c=1'
    }
]


const myTarget = document.querySelector('#myTarget')

function mapProductHTMLFromData(productData) {
    const template = `<div class="col-3">
    <div class="product-card">
        <img src="${productData.image}"
            alt="" class="product-image">
            <div class="product-text p-5">
                <p class="product-name my-0">${productData.name}

                </p>
                <p class="product-dimesion mb-3">${productData.dim_attribute}

                </p>
                <p class="product-weight mb-3">${productData.weight_attribute}</p>
                <p class="product-description mb-3">${productData.description}</p>
            </div>
        </div>
    </div>
    </div>`

    return template
}


function renderListData() {
    let str = '';

    ListData.forEach((item) => {
        str += mapProductHTMLFromData(item);
    })
    myTarget.innerHTML = str;
}

renderListData()*/ 