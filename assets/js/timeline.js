// Interactive Horizontal Timeline JS
document.addEventListener('DOMContentLoaded', function() {
  // Initialize timelines
  initTimeline('education-timeline');
  initTimeline('experience-timeline');
});

function initTimeline(timelineId) {
  const timeline = document.getElementById(timelineId);
  if (!timeline) return;
  
  const timelineItems = timeline.querySelectorAll('.timeline-item');
  const timelineContent = timeline.querySelector('.timeline-content-container');
  
  // Set initial active item (first one)
  if (timelineItems.length > 0) {
    setActiveItem(timelineItems[0], timelineId);
  }
  
  // Add click event to all timeline items
  timelineItems.forEach(item => {
    item.addEventListener('click', function() {
      setActiveItem(this, timelineId);
    });
  });
  
  // Add scroll buttons functionality
  const scrollLeftBtn = timeline.querySelector('.timeline-scroll-left');
  const scrollRightBtn = timeline.querySelector('.timeline-scroll-right');
  const itemsContainer = timeline.querySelector('.timeline-items-container');
  
  if (scrollLeftBtn && scrollRightBtn && itemsContainer) {
    scrollLeftBtn.addEventListener('click', function() {
      itemsContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', function() {
      itemsContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }
}

function setActiveItem(activeItem, timelineId) {
  const timeline = document.getElementById(timelineId);
  const items = timeline.querySelectorAll('.timeline-item');
  const contentContainer = timeline.querySelector('.timeline-content-container');
  const contentId = activeItem.getAttribute('data-content-id');
  
  // Remove active class from all items
  items.forEach(item => {
    item.classList.remove('active');
  });
  
  // Add active class to clicked item
  activeItem.classList.add('active');
  
  // Hide all content items
  const contentItems = contentContainer.querySelectorAll('.timeline-content');
  contentItems.forEach(content => {
    content.classList.remove('active');
  });
  
  // Show selected content
  const selectedContent = contentContainer.querySelector(`#${contentId}`);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
}
