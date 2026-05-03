import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add Landing Screen
landing_html = """
    <!-- ==================== LANDING SCREEN ==================== -->
    <div class="screen active" id="screen-landing">
      <div class="landing-content">
        <div class="emblem-ring">
          <div class="emblem-inner">
            <svg viewBox="0 0 80 80" class="emblem-svg">
              <polygon points="40,5 47,30 74,30 52,47 60,72 40,55 20,72 28,47 6,30 33,30" fill="none" stroke="#d4af37" stroke-width="1.5"/>
              <circle cx="40" cy="40" r="15" fill="none" stroke="#d4af37" stroke-width="1"/>
            </svg>
          </div>
        </div>
        <div class="home-badge">SSB PREPARATION SUITE</div>
        <h1 class="home-title">Psychological <span class="gold">Tests</span></h1>
        <p class="home-desc" style="margin-bottom: 30px;">Select a module to begin your practice session.</p>

        <div class="landing-actions" style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <button class="btn-module" id="btn-module-wat" style="padding: 30px 40px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; cursor: pointer; color: white; transition: 0.3s; width: 250px;">
            <h3 style="font-family: Orbitron; font-size: 2rem; color: #d4af37; margin-bottom: 10px;">WAT</h3>
            <p style="font-family: Exo 2; color: #8899aa;">Word Association Test<br>60 Words · 15s</p>
          </button>
          <button class="btn-module" id="btn-module-tat" style="padding: 30px 40px; background: rgba(255,255,255,0.05); border: 1px solid rgba(212,175,55,0.3); border-radius: 12px; cursor: pointer; color: white; transition: 0.3s; width: 250px;">
            <h3 style="font-family: Orbitron; font-size: 2rem; color: #d4af37; margin-bottom: 10px;">TAT</h3>
            <p style="font-family: Exo 2; color: #8899aa;">Thematic Apperception<br>12 Pictures · 4m</p>
          </button>
        </div>
      </div>
    </div>
"""

html = html.replace('<!-- ==================== HOME SCREEN ==================== -->', landing_html + '\n    <!-- ==================== HOME SCREEN (WAT) ==================== -->')

# Change screen-home to screen-home-wat
html = html.replace('<div class="screen active" id="screen-home">', '<div class="screen" id="screen-home-wat">')
# Add a back button to landing in home-wat
html = html.replace('<div class="home-content">', '<div class="home-content">\n        <button class="btn-back" onclick="showScreen(\'landing\')" style="position: absolute; top: 20px; left: 20px; background: none; border: none; color: #8899aa; cursor: pointer; font-family: \'Exo 2\';"><span style="margin-right:5px">←</span> Back</button>')

# Duplicate screen-home to create screen-home-tat
wat_home_match = re.search(r'(<!-- ==================== HOME SCREEN \(WAT\) ==================== -->.*?)(?=<!-- ==================== SESSION SCREEN ==================== -->)', html, re.DOTALL)
if wat_home_match:
    wat_home_code = wat_home_match.group(1)
    tat_home_code = wat_home_code.replace('HOME SCREEN (WAT)', 'HOME SCREEN (TAT)')
    tat_home_code = tat_home_code.replace('screen-home-wat', 'screen-home-tat')
    tat_home_code = tat_home_code.replace('WAT <span class="gold">Practice</span>', 'TAT <span class="gold">Practice</span>')
    tat_home_code = tat_home_code.replace('Word Association Test', 'Thematic Apperception Test')
    tat_home_code = tat_home_code.replace('60 random words · 15 seconds each', '11 pictures + 1 blank · 30s view · 4m write')
    tat_home_code = tat_home_code.replace('Drop a <strong>.txt</strong> word list', 'Drop <strong>images</strong> for the session')
    tat_home_code = tat_home_code.replace('id="word-file-input" accept=".txt,.text"', 'id="tat-file-input" accept="image/*" multiple')
    tat_home_code = tat_home_code.replace('id="btn-clear-upload"', 'id="btn-clear-tat-upload"')
    tat_home_code = tat_home_code.replace('id="upload-badge"', 'id="tat-upload-badge"')
    tat_home_code = tat_home_code.replace('id="upload-dropzone"', 'id="tat-upload-dropzone"')
    tat_home_code = tat_home_code.replace('id="btn-start"', 'id="btn-start-tat"')
    tat_home_code = tat_home_code.replace('id="btn-history"', 'id="btn-history-tat"')
    
    # modify rules
    tat_home_code = re.sub(r'<div class="rules-grid">.*?</div>', '''<div class="rules-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="rule-item"><span class="rule-num">01</span><span>11 pictures shown for 30s each</span></div>
            <div class="rule-item"><span class="rule-num">02</span><span>4 minutes to write a story</span></div>
            <div class="rule-item"><span class="rule-num">03</span><span>12th slide is blank</span></div>
            <div class="rule-item"><span class="rule-num">04</span><span>Mark completed stories at the end</span></div>
          </div>''', tat_home_code, flags=re.DOTALL)
          
    # modify stat ids
    tat_home_code = tat_home_code.replace('stat-sessions-val', 'stat-sessions-val-tat')
    tat_home_code = tat_home_code.replace('stat-best-val', 'stat-best-val-tat')
    tat_home_code = tat_home_code.replace('stat-avg-val', 'stat-avg-val-tat')

    html = html.replace(wat_home_code, wat_home_code + '\n' + tat_home_code)

# rename WAT screens
html = html.replace('id="screen-session"', 'id="screen-session-wat"')
html = html.replace('id="screen-review"', 'id="screen-review-wat"')
html = html.replace('id="screen-analysis"', 'id="screen-analysis-wat"')
html = html.replace('id="screen-history"', 'id="screen-history-wat"')

# Create TAT Session Screen
tat_session_html = """
    <!-- ==================== SESSION SCREEN (TAT) ==================== -->
    <div class="screen" id="screen-session-tat">
      <!-- Top HUD -->
      <div class="session-hud">
        <div class="hud-left">
          <span class="hud-label">PICTURE</span>
          <span class="hud-val" id="hud-tat-num">1 / 12</span>
        </div>
        <div class="hud-center">
          <div class="timer-ring" id="timer-ring-tat">
            <svg viewBox="0 0 120 120" class="timer-svg">
              <circle cx="60" cy="60" r="54" class="timer-track"/>
              <circle cx="60" cy="60" r="54" class="timer-progress" id="timer-progress-tat"/>
            </svg>
            <div class="timer-display">
              <span id="timer-val-tat">30</span>
              <span class="timer-unit" id="timer-unit-tat">sec</span>
            </div>
          </div>
        </div>
        <div class="hud-right">
          <button class="btn-pause" id="btn-pause-tat" title="Pause">⏸</button>
          <button class="btn-quit" id="btn-quit-tat" title="Quit">✕</button>
        </div>
      </div>

      <!-- TAT Image Stage -->
      <div class="tat-stage" id="tat-stage" style="display: flex; justify-content: center; align-items: center; height: calc(100vh - 150px); padding: 20px;">
        <img id="tat-image" src="" alt="TAT" style="max-width: 100%; max-height: 100%; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain; background: #000;" />
        <div id="tat-blank-placeholder" style="display: none; width: 100%; height: 100%; background: #000; border-radius: 8px; border: 2px dashed rgba(212,175,55,0.3); justify-content: center; align-items: center;">
            <span style="color: rgba(255,255,255,0.2); font-family: Orbitron; font-size: 2rem;">BLANK SLIDE</span>
        </div>
      </div>

      <!-- Instruction Overlay (for "Start Writing" etc) -->
      <div class="countdown-overlay hidden" id="tat-instruction-overlay" style="z-index: 100; background: rgba(0,0,0,1);">
        <div class="countdown-content">
          <h2 class="countdown-title" id="tat-instruction-text" style="font-size: 4rem;">Get Ready</h2>
        </div>
      </div>

      <!-- Pause Modal -->
      <div class="modal-overlay hidden" id="pause-modal-tat">
        <div class="modal-box">
          <div class="modal-icon">⏸</div>
          <h2>TAT Paused</h2>
          <div class="modal-actions">
            <button class="btn-primary" id="btn-resume-tat">▶ Resume</button>
            <button class="btn-danger" id="btn-quit-confirm-tat">⏹ End</button>
            <button class="btn-discard" id="btn-discard-session-tat">✕ Discard</button>
          </div>
        </div>
      </div>
    </div>
"""

# Create TAT Review Screen
tat_review_html = """
    <!-- ==================== REVIEW SCREEN (TAT) ==================== -->
    <div class="screen" id="screen-review-tat">
      <div class="review-header">
        <div class="review-badge">SESSION COMPLETE</div>
        <h2>Mark Completed Stories</h2>
        <p>Check the pictures for which you completed writing a story</p>
      </div>

      <div class="review-grid" id="review-grid-tat">
        <!-- populated by JS -->
      </div>

      <div class="review-summary">
        <div class="rs-stat">
          <span class="rs-num" id="rs-attempted-tat">0</span>
          <span class="rs-label">Completed</span>
        </div>
        <div class="rs-stat">
          <span class="rs-num" id="rs-skipped-tat">12</span>
          <span class="rs-label">Missed</span>
        </div>
      </div>

      <div class="review-actions">
        <button class="btn-secondary" id="btn-select-all-tat">Select All</button>
        <button class="btn-primary" id="btn-submit-review-tat">Submit & Save</button>
      </div>
    </div>
"""

# Create TAT History
tat_history_html = """
    <!-- ==================== HISTORY SCREEN (TAT) ==================== -->
    <div class="screen" id="screen-history-tat">
      <div class="history-header">
        <button class="btn-back" id="btn-back-history-tat" onclick="showScreen('home-tat')">← Back</button>
        <h2>TAT Session History</h2>
      </div>
      <div class="history-list" id="history-list-tat">
        <!-- populated by JS -->
      </div>
    </div>
"""

# Inject new TAT screens before closing app div
html = html.replace('  </div><!-- /app -->', tat_session_html + tat_review_html + tat_history_html + '\n  </div><!-- /app -->')


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
