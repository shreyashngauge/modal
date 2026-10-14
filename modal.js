(function () {
    const overlay = document.createElement('div');
    overlay.style.cssText =
        'position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;font-family:sans-serif;';

    overlay.innerHTML = `
        <div style="background:#fff;padding:24px;border-radius:8px;width:320px;text-align:center;">
            <h3>Demo Modal</h3>
            <p>Opened from the iframe's JS.</p>
            <button id="closeBtn">Close</button>
        </div>`;

    document.body.appendChild(overlay);

    document.getElementById('closeBtn').addEventListener('click', () => {
        overlay.remove();
        window.parent.postMessage({ type: 'MODAL_CLOSED' }, '*');
    });
})();
