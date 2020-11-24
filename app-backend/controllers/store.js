const express = require('express')
const store =  express.Router()
const Merch = require('../models/merch')
const Users = require('../models/users')

const isAuthenticated = (req, res, next) =>  {
	if (req.session.currentUser) {
        res.status(200).send("logged in")
		return next()
	} else{
		res.status(400).json({ err: err.message})
	}
}

//index route
store.get('/', (req,res) => {
    Merch.find({}, (err, foundMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Merch:', foundMerch)
        res.status(200).send(foundMerch)
    })
})

//create route isAuthenticated,
store.post('/create', async (req,res) => {
    Merch.create(req.body, (err, createdMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Merch Created:', createdMerch )
        res.status(200).send(createdMerch)
    })
})

//seed route
store.get('/seed', (req,res) => {
    Merch.create([
        {
            name:'Star Wars Mandalorian Keycap',
            type:'Keycaps',
            img:'https://i.etsystatic.com/23361137/r/il/60ea58/2370028493/il_1588xN.2370028493_nam0.jpg',
            price:20,
            quantity:100,
            description:"This keycap is only for mechanical keyboards with switches such as Cherry MX, Gateron, Kailh, etc. This keycap's backlit LED is subtle and may not be as bright as it appears in the picture.",
        },
        {
            name:"Natural Landscape Resin & Wood Artisan Handmade Keycap",
            type:'Keycaps',
            img:"https://i.etsystatic.com/25263028/d/il/9460a3/2601987911/il_340x270.2601987911_cwdk.jpg",
            price:20,
            quantity:100,
            description:"As the keycaps are handmade, every keycap is Unique.The keycaps you received may not be the 100% same as it showed in the picture.",
        },
        {
            name:"Pokemon Keycap Ditto Pikachu Cute Resin Pair",
            type:'Keycaps',
            img:"https://i.etsystatic.com/25672902/r/il/decf4e/2648836191/il_1588xN.2648836191_pb7g.jpg",
            price:30,
            quantity:100,
            description:"Custom resin Pokemon keycaps. You will get two keycaps,Pikachu and Ditto. Compatible with Cherry MX, Gateron, Kailh, and Outemu switches",
        },
        {
            name:"Animal Crossing Fossil Keycap",
            type:'Keycaps',
            img:"https://i.etsystatic.com/24390076/r/il/1509a2/2494066173/il_1588xN.2494066173_q2l6.jpg",
            price:20,
            quantity:100,
            description:"Animal Crossing Fossil Keycap.Cast in resin, not painted, all resin is colored. R4 Fit (escape key row, top row). Fits MX type switches.",
        },
        {
            name:"Cherry Blossom WASD Keycaps",
            type:'Keycaps',
            img:"https://i.etsystatic.com/20356291/r/il/51d8c5/2226394810/il_1588xN.2226394810_plu1.jpg",
            price:60,
            quantity:100,
            description:"Take your mechanical keyboard to Hanamura with these handcrafted cherry blossom keycaps! Four keys included (1x Q-row, 3x A-row) for a very special WASD set. Can also be used as arrow keys (though tops are profiled to match WASD). Q key is sculpted slightly differently from A keys to match OEM row profiles.",
        },
        {
            name:"Kensington ErgoSoft Wrist Rest for Mechanical and Gaming Keyboards",
            type:'Accessories',
            img:"https://images-na.ssl-images-amazon.com/images/I/71tOlbSJemL._AC_SL1500_.jpg",
            price:20,
            quantity:100,
            description:"Pro-comfort support Features a faux leather exterior reinforced by a gel-cushioned interior to provide an unrivaled balance between comfortable softness and firm ergonomic support. Ergonomist Approved to provide optimal health and protection when used correctly through proper alignment, tailored dimensions, and a unique curved design",
        },
        {
            name:"Marble Print Mouse Pad",
            type:'Accessories',
            img:"https://i.etsystatic.com/17985240/r/il/04ae1d/1855875303/il_1588xN.1855875303_2zep.jpg",
            price:15,
            quantity:100,
            description:"Flowland mousepads are inspired by contemporary art & design, making them perfect for your work or home office. Each mousepad is made from a polyester fabric with a rubber backed base to grip against any hard surface.",
        },
        {
            name:"Custom Doggo Mouse Pad",
            type:'Accessories',
            img:"https://i.etsystatic.com/22780949/r/il/99cada/2445052561/il_1588xN.2445052561_oyv4.jpg",
            price:10,
            quantity:100,
            description:"Our mouse pads are 7.75 x 9.25 - 5.5mm thick, black-backed made with natural rubber.",
        },
        {
            name:"Multifunctional Professional High Quality Desk Mat for Office and Home",
            type:'Accessories',
            img:"https://i.etsystatic.com/23753899/r/il/c3fd42/2614742269/il_1588xN.2614742269_2xjf.jpg",
            price:25,
            quantity:100,
            description:"Achieve the perfect balance of control / speed with Lxndscxpe's line of desk mats and their micro-textured fabric surface, providing a practical, elegant and professional workspace. Translate every mouse movement into exact cursor movement and enjoy unparalleled comfort during hard work sessions. Lxndscxpe stands out by the quality of its products, but also by its manufacturing process that produces mats of breathtaking details, with impeccable resolution. The organization which specializes since 2019 in the conception of landscapes, cities and complex designs guarantees you a standard of excellence beyond the market.",
        },
        {
            name:"Minion Mouse Mat",
            type:'Accessories',
            img:"https://i.etsystatic.com/19943688/r/il/3c65c0/2319096978/il_1588xN.2319096978_maky.jpg",
            price:15,
            quantity:100,
            description:"A high quality Hand made mouse mat with a funny picture of a Minion. Made with flexible rubber non slip base (5 mm) with polyester top layer onto which the image is printed & pressed so that the image is absorbed into the polyester.",
        },
        {
            name:"KBD75 V2 Anodized Aluminum Case",
            type:'Cases',
            img:"https://mechanicalkeyboards.com/shop/images/products/large_KBD75V2case0116_main.jpg",
            price:100,
            quantity:100,
            description:"Solid CNC Aluminum 75% Keyboard Case, compatible with KB75 PCB and Plate. Arylic Side Strip for RGB Underglow. Rubber Feet and Screws Included. No PCB or Plate Included and is also fully programmable - QMK Compatible",
        },
        {
            name:"Bamboo Mechanical Keyboard Case",
            type:'Cases',
            img:"https://mechanicalkeyboards.com/shop/images/products/large_KBDcase0187_main.jpg",
            price:100,
            quantity:100,
            description:" Features are as follows: 60% bamboo case, Compatible with DZ60, GH60, etc, Built in Wrist Rest, Case only - No PCB or Plate Included",
        },
        {
            name:"Hassium Palm Rest (Deck)",
            type:'Cases',
            img:"https://mechanicalkeyboards.com/shop/images/products/large_803_Arm_Rest_2.jpg",
            price:40,
            quantity:100,
            description:"Sleek and comfortable palm rest made to fit your Hassium keyboard. Helps prevent any future pain or discomfort in the wrist. Made to fit at your office or at your home personal desk.",
        },
        {
            name:"Silver CNC Frame (Vortex)",
            type:'Cases',
            img:"https://mechanicalkeyboards.com/shop/images/products/large_1001_VTGCNC60SIV.jpg",
            price:100,
            quantity:100,
            description:"60% Silver CNC Frame for mechanical and gaming keyboards. PCB support plate mount stabilizer, so if you want to order gk64 pcb, you need order a plate at the same time.",
        },
        {
            name:"Acrylic Case - Frosted Clear (Tex)",
            type:'Cases',
            img:"https://mechanicalkeyboards.com/shop/images/products/large_1410_20150901_102542.jpg",
            price: 70,
            quantity:100,
            description:"This is for the case only, no plate, the design will fit the stock FR4 plate, or any of the plates and foams I sell in my store. The mounting is identical to the Aluminum V4N4G0N case, using small rubber bumpons that sandwich the plate between the midlayers and bezel.",
        },
        {
            name:"DZ60 REV 3.0 60% MECHANICAL KEYBOARD PCB",
            type:'PCB Board',
            img:"https://cdn.shopify.com/s/files/1/1473/3902/products/c_1_1800x1800.jpg",
            price:40,
            quantity:100,
            description:"A keyboard PCB with QMK firmware, USB-C, and RGB underglow",
        },
        {
            name:"DZ65 RGB V2 HOT SWAP RGB PCB",
            type:'PCB Board',
            img:"https://cdn.shopify.com/s/files/1/1473/3902/products/1_18dc6ef1-b7be-400c-8fa9-dc9dd20eef32_1800x1800.jpg",
            price:70,
            quantity:100,
            description:"Compatible with tofu65 Alu case, but can't be compatible with tofu65 acrylic case. A keyboard PCB with QMK firmware, Type-c USB, Hot-swap, and RGB Led for Pre-key.",
        },
        {
            name:"KBD75 REV 2.0 PCB",
            type:'PCB Board',
            img:"https://cdn.shopify.com/s/files/1/1473/3902/products/1_a75ecb41-b509-44b2-8dd8-4e69e9abaac4_1800x1800.jpg",
            price:50,
            quantity:100,
            description:"Compatible with tofu65 Alu case, but can't be compatible with tofu65 acrylic case. A keyboard PCB with QMK firmware, Type-c USB, Hot-swap, and RGB Led for Pre-key.",
        },
        {
            name:"KBDFANS KBD6X HOT SWAP PCB",
            type:'PCB Board',
            img:"https://cdn.shopify.com/s/files/1/1473/3902/products/2_dc1dc79d-b97a-49ce-9d24-3c030471fdbb_1800x1800.jpg",
            price:50,
            quantity:100,
            description:"It is set up for a 7u spacebar, 1u backspace. Most stock cheap keycap sets will have the wrong size spacebar. Hold down spacebar and B while inserting the data cable to put it into boot mode when you are going to flash the pcb.",
        },
        {
            name:"KBD67MKII PCB SOLDERED",
            type:'PCB Board',
            img:"https://cdn.shopify.com/s/files/1/1473/3902/products/1_318dadb1-5ca8-46b7-b8da-85211eb7af57_1800x1800.jpg",
            price:50,
            quantity:100,
            description:"Compatible with tofu65 Alu case, but can't be compatible with tofu65 acrylic case. A keyboard PCB with QMK firmware, Type-c USB, Hot-swap, and RGB Led for Pre-key.",
        },
        {
            name:"Kailh Novelkey Cream Mechanical Keyboard Switch(30 pcs Set)",
            type:'Switches',
            img:"https://ae01.alicdn.com/kf/H63b8af3076f646e988b7858cc31f1a89F.jpg_480x480q90.jpg",
            price:30,
            quantity:100,
            description:"Kailh Cream switches are a brand new linear switch. Featuring housing and stem that is made out of self lubricating POM, this linear is a smooth and unique experience. The switch is also a first for Kailh, as it features MX style latching for the housing.",
        },
        {
            name:"Kailh&NK Novelkey Blueberry Mechanical Keyboard Switch(30 pcs Set)",
            type:'Switches',
            img:"https://ae01.alicdn.com/kf/H5ba005a5bd6d45d7bddb00c9e8a0a854i/Kailh-NK-Novelkey-Blueberry-Mechanical-Keyboard-switch-Tactile-hangfeeling-MX-switch-5pin.jpg_220x220xz.jpg",
            price:30,
            quantity:100,
            description:"Mounted on PCB to simulate actual key feeling.Very popular for typists who don't mind annoying their neighbors. A must have kit to try Cherry MX mechanical key switch.",
        },
        {
            name:"Gateron Robin Custom Switch",
            type:'Switches',
            img:"https://ae01.alicdn.com/kf/H2c0d26cbaa814cac85e2aae805b32a14S/Gateron-Robin-Custom-Switch-4pin-5pin-RGB-linear-62g-67g-force-mx-clone-switch-for-mechanical.jpg_220x220xz.jpg",
            price:30,
            quantity:100,
            description:"A collaboration between EVE and Gateron, the Robin custom mechanical switches are a linear treat to type on. Available in 62- and 67-gram weights, these switches take their name—and colorway—from the smooth teal tones of a robin’s egg. Rated for 50 million keystrokes, the switches come lubed from the factory for a smooth linear feel. They feature a 5-pin PCB-mounted construction and a gold-plated spring for durability.",
        },
        {
            name:"Original Cherry MX Mechanical Keyboard Switch",
            type:'Switches',
            img:"https://ae01.alicdn.com/kf/Hfb8ae200a157485ead19628f72299a91L/Original-Cherry-MX-Mechanical-Keyboard-Switch-Speed-silent-pink-axis-mute-shaft-RGB-SMD-switch.jpg_220x220xz.jpg",
            price:40,
            quantity:100,
            description:"The Cherry MX Red switches are similar to the Cherry MX Black. They are linear switches without any feedback. The difference to the Cherry MX Black is the far less actuation force of 45 cN. As this enables a faster actuation, the Cherry MX Red are also mostly used in gaming keyboards.",
        },
        {
            name:"Arctos Mechanical Keyboard Switches",
            type:'Switches',
            img:"https://ae01.alicdn.com/kf/H98bb916ccc834ba8afe51e227d5d2399f/4pcs-pack-Arctos-Switches-Mechanical-Keyboard-Customized-MX-switches-Tactile-switch-3pin-65g-72g-California-Bajan.jpg_220x220xz.jpg",
            price:30,
            quantity:100,
            description:"Cherry MX Blue switches give you a tactile bump as well as an audible click. When you press a key with a Cherry MX Blue switch, you'll feel a little bump and hear a high-pitched clicking sound the moment the keyboard input is sent to your PC.",
        }
    ])
})

//search route
store.get('/searchName/:text', async (req,res) => {

    await Merch.find({"name": req.params.text }, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    })
})

//sort routes below

store.get('/sortAccessories' , async (req,res) => {
    const sort = "Accessories"
    await Merch.find({"type": "Accessories" }, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    })
})

store.get('/sortKeycaps' , async (req,res) => {
    await Merch.find({"type": "Keycaps" }, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    })
})

store.get('/sortCases' , async (req,res) => {
    await Merch.find({"type": "Cases" }, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    })
})

store.get('/sortSwitches' , async (req,res) => {
    await Merch.find({"type": "Switches" }, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    })
})

store.get('/sortPcbBoards' , async (req,res) => {
    await Merch.find({"type": "PCB Board" }, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    })
})

//show route
//use this route to return the target object
store.get('/:id', (req,res) => {
    Merch.findById(req.params.id, (err, targetMerch) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        console.log('Target Merch:', targetMerch )
        res.status(200).json(targetMerch)
    })
})

//delete route
store.delete('/:id', (req,res) => {
    Merch.findByIdAndRemove( req.params.id, (err ,deletedMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Deleted Merch:', deletedMerch )
        res.status(200).send(deletedMerch)
    })
})

//update route
store.put('/:id', (req,res) => {
    Merch.findOneAndUpdate( req.params.id, req.body, {new: true}, (err, updatedMerch) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        console.log('Updated Merch:', updatedMerch )
        res.status(200).json(updatedMerch)
    })
})

//buy button
store.put('/buy/:id', async (req,res) => {
    try{
        let currentUser = req.session.currentUser
        const updatedMerch = await Merch.findByIdAndUpdate(req.params.id,
            {
                $inc: {quantity: -1}
            },
            {new: true}
        )
        console.log(updatedMerch)
    }catch(err) {
        console.log(err)
    }
})

module.exports = store
