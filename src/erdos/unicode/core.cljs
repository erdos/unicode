(ns ^:figwheel-hooks erdos.unicode.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [erdos.unicode.data :as data]))

(defn get-app-element []
  (gdom/getElement "app"))

(def input-text (atom "Hello Amélie!"))

(def normalized-state
  (reagent.core/track
   (fn []
     (let [nfc (.normalize @input-text "NFC")
           nfd (.normalize @input-text "NFD")
           nfkc (.normalize @input-text "NFKC")
           nfkd (.normalize @input-text "NFKD")]
       {:nfc? (= @input-text nfc)
        :nfc nfc
        :nfd? (= @input-text nfd)
        :nfd nfd
        :nfkc? (= @input-text nfkc)
        :nfkc nfkc
        :nfkd? (= @input-text nfkd)
        :nfkd nfkd}))))

(defn- textarea [input-text]
  [:textarea
   {:on-change     (fn [t] (reset! input-text (.-value (.-target t))))
    :default-value @input-text}])

(defn char->hex [c]
  (-> (str c)
      (.charCodeAt 0)
      (.toString 16)
      (.toUpperCase)
      (.padStart 4 "0")
      (->> (str "0x"))))

;; maybe html numeric code as well?

(defn- normal-forms []
  [:div.box
   [:b "Normal forms"]
   [:ul
    (doall
     (for [[txt k p] [["NFC" :nfc :nfc?]
                      ["NFD" :nfd :nfd?]
                      ["NFKC" :nfkc :nfkc?]
                      ["NFKD" :nfkd :nfkd?]]]
       [:li {:key txt}
        (if (p @normalized-state)
          [:span (str "Input is in " txt " form.")]
          [:button {:on-click #(reset! input-text (k @normalized-state))}
           (str "Convert to " txt)])]))]])

(defn text-groups [input-text]
  (->> input-text
       (map (fn [c] (data/group (.charCodeAt (str c) 0))) )
       (partition-by identity)
       (mapcat (fn [cs]
                 (list* [(first cs) (count cs)]
                        (repeat (dec (count cs)) nil))))))

(defn hello-world []
  [:main
   [:div.control
    [:div [textarea input-text]]
    [:div [normal-forms]]]
   [:div
    [:table {:width "100%"}
     [:thead
      [:tr
       [:th]
       [:th]
       [:th "name"]
       [:th "group"]]]
     [:tbody
      (doall
       (for [[idx c group]
             (map vector (range) @input-text (text-groups @input-text))]
         [:tr {:key idx}
          [:td (str c)]
          [:td (char->hex c)]
          [:td (data/get-name (.charCodeAt c 0))]
          (when group
            [:td {:rowSpan (second group)} (first group)])
          ]))]]
    ]])

(defn mount [el]
  (rdom/render [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
