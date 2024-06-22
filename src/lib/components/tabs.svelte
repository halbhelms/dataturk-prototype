<script>
  export let activeTab = 0;
  export let tabs = [
    { title: 'Analysis', path: '/briefings/analysis' },
    { title: 'Boards', path: '/briefings/boards' },
    { title: 'Briefing', path: '/briefings/briefing' }
  ];
</script>

<main>
  <div class="tab-bar">
    {#each tabs as tab, i}
      <div class="tab {activeTab == i ? 'active' : ''}">{tab.title}</div>
    {/each}
  </div>
</main>

<style>
.tab-bar {
  display: flex;
  border-bottom: 2px solid #ccc;
}

.tab {
  flex: 1;
  padding: var(--padding-sm);
  text-align: center;
  font-size: var(--font-size-lg);
  cursor: pointer;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-bottom: none;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.tab:not(:last-child) {
  border-right: none;
}

.tab:hover {
  background-color: #e1e1e1;
}

.active {
  background-color: var(--color-active);
  color: white;
  padding-top: calc(var(--padding-sm) + 5px);
  padding-bottom: calc(var(--padding-sm) + 5px);
  margin-top: -5px;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
}
</style>
