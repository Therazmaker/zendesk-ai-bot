// Floating widget injection script for Zendesk pages
(function() {
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'floating-widget';
    widgetContainer.style.position = 'fixed';
    widgetContainer.style.bottom = '20px';
    widgetContainer.style.right = '20px';
    widgetContainer.style.zIndex = '10000';
    widgetContainer.style.height = '60px';
    widgetContainer.style.width = '60px';
    widgetContainer.style.borderRadius = '50%';
    widgetContainer.style.backgroundColor = '#0072c6';
    widgetContainer.style.color = 'white';
    widgetContainer.style.display = 'flex';
    widgetContainer.style.alignItems = 'center';
    widgetContainer.style.justifyContent = 'center';
    widgetContainer.style.cursor = 'pointer';
    widgetContainer.innerHTML = '<span>Help</span>';

    widgetContainer.onclick = function() {
        // Logic to show the widget dialog or redirect
        alert('Widget Clicked!');
    };

    document.body.appendChild(widgetContainer);
})();