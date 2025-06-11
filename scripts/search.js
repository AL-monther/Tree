if (window.innerWidth <= 768) {
      document.getElementById("tree-simple").style.transform = "scale(0.7)";
    } else {
      document.getElementById("tree-simple").style.transform = "scale(1)";
    }

    function collapseAllNodes(node) {
      if (node.children && node.children.length > 0) {
        node.collapsed = true;
        node.children.forEach(child => collapseAllNodes(child));
      }
    }    function findAllNodePaths(node, value, currentPath = [], allPaths = []) {
      const path = [...currentPath, node];
      
      const name = node.text?.name ?? "";
      const searchName = node.searchName ?? "";
      
      // تحويل النص المبحوث عنه والأسماء إلى نص صغير مع إزالة المسافات الزائدة
      const searchText = value.toLowerCase().trim();
      const nodeText = name.toLowerCase().trim();
      const nodeSearchName = searchName.toLowerCase().trim();
      
      // مطابقة الاسم أو searchName
      if (searchText === nodeText || nodeSearchName.includes(searchText)) {
        allPaths.push(path);
      }

      if (node.children) {
        for (const child of node.children) {
          findAllNodePaths(child, value, path, allPaths);
        }
      }

      return allPaths;
    }

    function highlightNodes(paths) {
      const allNodes = document.querySelectorAll(".node");
      allNodes.forEach(el => {
        el.style.border = "";
        el.style.boxShadow = "";
      });

      paths.forEach(path => {
        path.forEach(p => {
          const selector = `.node`;
          const allEls = Array.from(document.querySelectorAll(selector));
          allEls.forEach(el => {
            if (el.textContent.trim() === p.text.name) {
              el.style.transition = "all 0.3s ease";
              el.style.border = "4px solid gold";
              el.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.6)";
            }
          });
        });
      });
    }

    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }    function handleSearch(e) {
      if (e.key !== "Enter") return;
      
      const searchInput = document.getElementById('search-input');
      const value = searchInput ? searchInput.value.trim() : this.value.trim();
      if (!value) return;

      collapseAllNodes(chart_config.nodeStructure);
      const paths = findAllNodePaths(chart_config.nodeStructure, value);

      if (paths.length > 0) {
        // Expand all nodes in all paths
        const allNodesToExpand = new Set();
        paths.forEach(path => {
          path.forEach(node => allNodesToExpand.add(node));
        });
        allNodesToExpand.forEach(node => node.collapsed = false);
        
        new Treant(chart_config);

        setTimeout(() => {
          const nodes = document.querySelectorAll(".node");
          let firstMatch = true;
          const highlightedNodes = [];
          let matchCount = 0;
          
          nodes.forEach(nodeEl => {
            const nodeText = nodeEl.innerText.toLowerCase().trim();
            const searchText = value.toLowerCase().trim();
            const nodeData = nodeEl.__data__;
            const searchName = nodeData?.searchName?.toLowerCase().trim() ?? "";
            
            // مطابقة الاسم أو searchName
            if (nodeText === searchText || (searchName && searchName.includes(searchText))) {
              matchCount++;
              nodeEl.style.transition = "all 0.3s ease";
              nodeEl.style.border = "3px solid gold";
              nodeEl.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.5)";
              highlightedNodes.push(nodeEl);
              
              if (firstMatch) {
                nodeEl.scrollIntoView({ behavior: "smooth", block: "center" });
                firstMatch = false;
              }
            }
          });

          // إظهار رسالة مناسبة حسب عدد النتائج
          let message = "";
          if (matchCount === 1) {
            message = "تم العثور على شخص واحد";
          } else if (matchCount === 2) {
            message = "تم العثور على شخصين";
          } else {
            message = `تم العثور على ${matchCount} أشخاص`;
          }
          alert(message);

          // إزالة التظليل بعد 4 ثواني
          setTimeout(() => {
            highlightedNodes.forEach(node => {
              node.style.border = "";
              node.style.boxShadow = "";
            });
          }, 4000);
        }, 500);
      } else {
        alert("لم يتم العثور على الاسم");
      }
    }

    // التكبير والتصغير
    let currentScale = 1;
    function zoomIn() {
      currentScale += 0.1;
      document.getElementById('tree-simple').style.transform = `scale(${currentScale})`;
    }

    function zoomOut() {
      currentScale -= 0.1;
      if (currentScale < 0.3) currentScale = 0.3;
      document.getElementById('tree-simple').style.transform = `scale(${currentScale})`;
    }

    // حساب عدد أفراد العائلة
    function countFamilyMembers(node) {
      let count = 1;
      if (node.children) {
        node.children.forEach(child => {
          count += countFamilyMembers(child);
        });
      }
      return count ;
    }

    // تحسين البحث مع اقتراحات
    function showSearchSuggestions(value) {
      const suggestions = findAllMatches(chart_config.nodeStructure, value);
      const container = document.getElementById('search-suggestions');
      container.innerHTML = '';
      container.style.display = suggestions.length ? 'block' : 'none';
      
      suggestions.forEach(name => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.textContent = name;
        div.onclick = () => {
          document.getElementById('search-input').value = name;
          handleSearch({ key: 'Enter' });
          container.style.display = 'none';
        };
        container.appendChild(div);
      });
    }

    // تحديث العداد عند تحميل الصفحة
    window.addEventListener('load', () => {
      const count = countFamilyMembers(chart_config.nodeStructure) - 1;
      let isAlternateNumbers = false;
      
      function updateNumbers() {
        const toggleButton = document.getElementById('toggle-numbers');
        if (isAlternateNumbers) {
          document.getElementById('family-count').textContent = '672';
          document.getElementById('ibrahim-count').innerHTML = 'عدد أبناء البراهيم: <span>220</span>';
          document.getElementById('abdulrahman-count').innerHTML = 'عدد أبناء الدحيم: <span>355</span>';
          document.getElementById('abdullah-count').innerHTML = 'عدد أبناء العبدالله: <span>142</span>';
          toggleButton.textContent = 'الأحياء فقط';
        } else {
          document.getElementById('family-count').textContent = '756';
          document.getElementById('ibrahim-count').innerHTML = 'عدد أبناء البراهيم: <span>240</span>';
          document.getElementById('abdulrahman-count').innerHTML = 'عدد أبناء الدحيم: <span>389</span>';
          document.getElementById('abdullah-count').innerHTML = 'عدد أبناء العبدالله: <span>162</span>';
          toggleButton.textContent = 'المجموع الكلي';
        }
      }

      updateNumbers();

      document.getElementById('toggle-numbers').addEventListener('click', () => {
        isAlternateNumbers = !isAlternateNumbers;
        updateNumbers();
        
        // تأثير بصري للتحديث
        const counters = document.querySelectorAll('.counter-item span, #family-count');
        counters.forEach(counter => {
          counter.style.transition = 'all 0.3s ease';
          counter.style.transform = 'scale(1.2)';
          setTimeout(() => {
            counter.style.transform = 'scale(1)';
          }, 300);
        });
      });

      // إضافة وظيفة تصغير التبويب
      const minimizeBtn = document.getElementById('minimize-info');
      const infoBar = document.querySelector('.info-bar');
      let isMinimized = false;

      minimizeBtn.addEventListener('click', () => {
        isMinimized = !isMinimized;
        infoBar.classList.toggle('minimized');
        minimizeBtn.textContent = isMinimized ? '🔎' : '🔍';
        
        // تأثير بصري
        minimizeBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
          minimizeBtn.style.transform = 'scale(1)';
        }, 200);
      });
    });

    const debouncedSearch = debounce(handleSearch, 250);
    document.getElementById("search-input").addEventListener("keydown", debouncedSearch);

    collapseAllNodes(chart_config.nodeStructure);
    new Treant(chart_config);
    // إضافة event listener للتحقق من فتح النود
document.addEventListener('click', function(e) {
    if (e.target.closest('.special-node')) {
        var audio = new Audio('scripts/voice.mp3'); // ضع مسار الصوت الخاص بك هنا
        audio.play();
    }
});