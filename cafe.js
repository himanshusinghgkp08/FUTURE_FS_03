 // Full Menu Data
        const menuData = {
            hot: [
                {n: "Espresso", p: 120}, {n: "Americano", p: 140}, {n: "Cappuccino", p: 180},
                {n: "Latte", p: 200}, {n: "Mocha", p: 220}, {n: "Hot Chocolate", p: 240},
                {n: "Masala Chai", p: 100}, {n: "Green Tea", p: 120}
            ],
            cold: [
                {n: "Cold Coffee", p: 180}, {n: "Iced Latte", p: 200}, {n: "Iced Mocha", p: 220},
                {n: "Oreo Shake", p: 240}, {n: "Chocolate Shake", p: 230}, {n: "Strawberry Smoothie", p: 220},
                {n: "Fresh Lime Soda", p: 120}
            ],
            snacks: [
                {n: "Veg Grilled Sandwich", p: 180}, {n: "Cheese Corn Sandwich", p: 200},
                {n: "Veg Burger", p: 220}, {n: "Paneer Tikka Sandwich", p: 240},
                {n: "French Fries", p: 150}, {n: "Peri Peri Fries", p: 170}, {n: "Garlic Bread", p: 160}
            ],
            dessert: [
                {n: "Chocolate Brownie", p: 180}, {n: "Brownie with Ice Cream", p: 220},
                {n: "Cheesecake", p: 250}, {n: "Chocolate Pastry", p: 150}, {n: "Waffles with Syrup", p: 240}
            ]
        };

        // Render Menu Logic - Fixed ID matching for snacks and desserts
        function renderMenu() {
            Object.keys(menuData).forEach(cat => {
                const container = document.getElementById(`${cat}-menu`);
                if (container) {
                    menuData[cat].forEach(item => {
                        container.innerHTML += `
                            <div onclick="openOrderModal('${item.n}', ${item.p})" class="flex justify-between items-center border-b border-stone-100 pb-3 cursor-pointer hover:bg-stone-50 transition-all px-3 py-2 rounded-xl group">
                                <span class="font-medium group-hover:text-orange-800 transition-colors">${item.n}</span>
                                <span class="font-bold text-stone-600 group-hover:text-orange-900 transition-colors">₹${item.p}</span>
                            </div>
                        `;
                    });
                }
            });
        }
        // Modal Controls
        function openOrderModal(name, price) {
            document.getElementById('modal-item-name').innerText = `${name} - ₹${price}`;
            document.getElementById('orderedItem').value = name;
            document.getElementById('order-modal').classList.remove('hidden');
            document.getElementById('order-modal').classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeModal() {
            document.getElementById('order-modal').classList.add('hidden');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }

        // Form Handling
        document.getElementById('orderForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const item = document.getElementById('orderedItem').value;
            // Note: In a real app, you'd send this to a server
            showNotification(`Order Received for ${item}! We're preparing your treats.`);
            closeModal();
            e.target.reset();
        });

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            showNotification(`Thanks, ${name}! Your message has been sent successfully.`);
            e.target.reset();
        });

        // Mobile Menu
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

        // Helper Notification
        function showNotification(msg) {
            // Using alert for demo, replace with custom toast UI if preferred
            alert(msg);
        }

        // Download Simulation
        function simulateDownload() {
            alert("Preparing your PDF menu... The download will begin shortly.");
        }
        // Initialize
        window.onload = renderMenu;