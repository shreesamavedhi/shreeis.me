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
      scrollToCenter(this, timelineId);
    });
  });
  
  // Add scroll buttons functionality
  const scrollLeftBtn = timeline.querySelector('.timeline-scroll-left');
  const scrollRightBtn = timeline.querySelector('.timeline-scroll-right');
  const itemsContainer = timeline.querySelector('.timeline-items-container');
  
  if (scrollLeftBtn && scrollRightBtn && itemsContainer) {
    // Manage scroll button visibility
    updateScrollButtonVisibility(itemsContainer, scrollLeftBtn, scrollRightBtn);
    
    // Check scroll position on scroll event
    itemsContainer.addEventListener('scroll', function() {
      updateScrollButtonVisibility(itemsContainer, scrollLeftBtn, scrollRightBtn);
    });
    
    // Scroll buttons functionality
    scrollLeftBtn.addEventListener('click', function() {
      const scrollAmount = itemsContainer.clientWidth * 0.75;
      itemsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', function() {
      const scrollAmount = itemsContainer.clientWidth * 0.75;
      itemsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    
    // Make sure active item is visible
    const activeItem = timeline.querySelector('.timeline-item.active');
    if (activeItem) {
      scrollToCenter(activeItem, timelineId);
    }
  }
}

// Show/hide scroll buttons based on scroll position
function updateScrollButtonVisibility(container, leftBtn, rightBtn) {
  const isAtStart = container.scrollLeft <= 10;
  const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
  
  leftBtn.style.opacity = isAtStart ? '0.3' : '1';
  rightBtn.style.opacity = isAtEnd ? '0.3' : '1';
  leftBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
  rightBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
}

// Scroll to make an item centered in view
function scrollToCenter(item, timelineId) {
  const timeline = document.getElementById(timelineId);
  const container = timeline.querySelector('.timeline-items-container');
  
  if (container) {
    const containerWidth = container.clientWidth;
    const itemWidth = item.offsetWidth;
    const itemLeft = item.offsetLeft;
    const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
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
